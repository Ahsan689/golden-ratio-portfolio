import { useEffect, useRef, useState } from "react";
import useScrollLock from "../hooks/useScrollLock";

const CLOSE_MS = 200;

const ModalBox = ({ children, close, isOpen = false }) => {
  const [active, setActive] = useState(false); // adds .is-open (enter / open state)
  const [closing, setClosing] = useState(false); // adds .is-closing (exit state)
  const boxRef = useRef(null);
  const closingRef = useRef(false); // guards against double-close during animation
  const timerRef = useRef(null);

  // Keep the page scroll locked the whole time the modal is on screen —
  // including while the close animation plays. It only unlocks once `close(0)`
  // flips isOpen to false (which happens in finalize, after the animation ends).
  useScrollLock(isOpen);

  // Enter animation: when opened, paint the closed state first, then activate
  // on the next frame so the transition runs.
  useEffect(() => {
    if (isOpen) {
      closingRef.current = false;
      setClosing(false);
      setActive(false);
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setActive(true))
      );
      return () => cancelAnimationFrame(raf);
    }
    // Parent marked it closed (after finalize): reset internal state.
    setActive(false);
    setClosing(false);
    closingRef.current = false;
    return undefined;
  }, [isOpen]);

  // Runs after the close animation finishes: removes the modal for real and,
  // via close(0) -> isOpen=false, releases the scroll lock.
  const finalize = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setClosing(false);
    closingRef.current = false;
    close(0);
  };

  // Single animated close path used by the button, backdrop and Escape.
  const requestClose = () => {
    if (closingRef.current) return; // prevent double-clicks during animation
    closingRef.current = true;
    setActive(false); // remove is-open -> animate back to closed
    setClosing(true); // is-closing -> use the faster 200ms transition
    // Fallback in case transitionend doesn't fire (e.g. reduced motion).
    timerRef.current = setTimeout(finalize, CLOSE_MS + 60);
  };

  const handleBoxTransitionEnd = (e) => {
    if (!closingRef.current) return;
    if (e.target !== boxRef.current) return; // ignore bubbled child transitions
    if (e.propertyName !== "transform" && e.propertyName !== "opacity") return;
    finalize();
  };

  // Escape closes (only while open).
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Esc") requestClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Clean up the fallback timer if unmounted mid-animation.
  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  // Close when the dark backdrop itself is clicked (not the inner content).
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) requestClose();
  };

  const className =
    "aali_tm_modalbox" +
    (active ? " is-open" : "") +
    (closing ? " is-closing" : "");

  return (
    <div className={className} onClick={handleBackdropClick}>
      <div
        className="box_inner"
        ref={boxRef}
        onTransitionEnd={handleBoxTransitionEnd}
      >
        <div className="close">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              requestClose();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 511.995 511.995"
              style={{ enableBackground: "new 0 0 511.995 511.995" }}
              xmlSpace="preserve"
              className=" replaced-svg modalCloseSvg"
            >
              <g>
                <g>
                  <path d="M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005    s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874    C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0    c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0    C493.435,187.359,493.435,324.651,409.08,409.006z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046    c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02    c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046    c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111    c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};

export default ModalBox;
