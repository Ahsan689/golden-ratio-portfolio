import { useEffect } from "react";

// iPadOS 13+ reports as "Mac" but is touch-capable, so check for that too.
const isIOS = () => {
  if (typeof navigator === "undefined") return false;
  const platform = navigator.platform || "";
  const ua = navigator.userAgent || "";
  return (
    /iP(ad|hone|od)/.test(platform) ||
    /iP(ad|hone|od)/.test(ua) ||
    (platform === "MacIntel" &&
      typeof document !== "undefined" &&
      navigator.maxTouchPoints > 1)
  );
};

// Reference counting so multiple open modals lock/unlock the page exactly once.
let lockCount = 0;
let saved = null;

const applyLock = () => {
  const html = document.documentElement;
  const body = document.body;
  const scrollY = window.scrollY || window.pageYOffset || 0;
  const ios = isIOS();

  saved = {
    htmlOverflow: html.style.overflow,
    bodyOverflow: body.style.overflow,
    bodyPaddingRight: body.style.paddingRight,
    bodyPosition: body.style.position,
    bodyTop: body.style.top,
    bodyLeft: body.style.left,
    bodyRight: body.style.right,
    bodyWidth: body.style.width,
    scrollY,
    ios,
  };

  // 2. Compensate for the scrollbar width BEFORE hiding overflow (no layout shift).
  const scrollBarWidth = window.innerWidth - html.clientWidth;
  if (scrollBarWidth > 0) {
    const basePad = parseFloat(window.getComputedStyle(body).paddingRight) || 0;
    body.style.paddingRight = `${basePad + scrollBarWidth}px`;
  }

  // 1. Lock scroll on both <html> (the viewport scroller here) and <body>.
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";

  // 3. iOS also needs the body pinned, or it scrolls behind the modal.
  if (ios) {
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
  }
};

const releaseLock = () => {
  if (!saved) return;
  const html = document.documentElement;
  const body = document.body;

  html.style.overflow = saved.htmlOverflow;
  body.style.overflow = saved.bodyOverflow;
  body.style.paddingRight = saved.bodyPaddingRight;
  if (saved.ios) {
    body.style.position = saved.bodyPosition;
    body.style.top = saved.bodyTop;
    body.style.left = saved.bodyLeft;
    body.style.right = saved.bodyRight;
    body.style.width = saved.bodyWidth;
  }
  // 5. Restore the exact scroll position.
  window.scrollTo(0, saved.scrollY);
  saved = null;
};

/**
 * Locks background scroll while `locked` is true and restores the page
 * (styles + scroll position) when it becomes false / the component unmounts.
 * Reference-counted, so several simultaneously-open modals behave correctly.
 */
export default function useScrollLock(locked) {
  useEffect(() => {
    if (!locked || typeof document === "undefined") return undefined;

    lockCount += 1;
    if (lockCount === 1) applyLock();

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) releaseLock();
    };
  }, [locked]);
}
