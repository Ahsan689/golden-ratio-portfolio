import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "service", label: "Service" },
  { id: "testimonial", label: "Testimonial" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);

  // Close the open menu when tapping/clicking anywhere outside it
  useEffect(() => {
    if (!toggle) return;
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    // defer so the tap that opened the menu doesn't immediately close it
    const id = setTimeout(() => {
      document.addEventListener("pointerdown", handleOutside);
    }, 0);
    return () => {
      clearTimeout(id);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [toggle]);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // activate when a section sits in the upper-middle band of the screen
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="aali_tm_mobile_menu" ref={menuRef}>
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/G_3.png" alt="aali image" />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown ${toggle ? "active" : ""}`}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={active === item.id ? "current" : ""}
              >
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(item.id);
                    setToggle(false);
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
