import { useEffect } from "react";
import { msg } from "../svgImage";

// Fitting line-icons per service (gold stroke on the dark cards, styled in CSS).
const ICONS = {
  concept: (
    <svg className="svg service_glyph" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.6 8.4 13.2 13.2 8.4 15.6 10.8 10.8" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
  drafting: (
    <svg className="svg service_glyph" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  ),
  modeling: (
    <svg className="svg service_glyph" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.3 7 12 12 20.7 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  ),
  construction: (
    <svg className="svg service_glyph" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 16a8 8 0 0 1 16 0" />
      <line x1="2.5" y1="16" x2="21.5" y2="16" />
      <path d="M9.5 8V5h5v3" />
    </svg>
  ),
};

const Service = ({ dark }) => {
  useEffect(() => {
    const VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);

  const backSrc = `img/svg/service${dark ? "-dark" : ""}.png`;

  return (
    <div className="aali_tm_section" id="service">
      <div className="aali_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="aali_tm_main_title"
                    data-text-align="left"
                    data-color="dark"
                  >
                    <span>What We Do</span>
                    <h3>Our Architectural Services</h3>
                    <p>
                    We offer high-quality design and planning services at competitive prices. Our main goal is client satisfaction, which we achieve through a holistic approach, innovative design, and ongoing project support.
                    </p>
                  </div>
                </div>
              </li>

              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {ICONS.concept}
                    <img className="back" src={backSrc} alt="" />
                  </span>
                  <div className="title">
                    <h3>Conceptual Design &amp; Vision</h3>
                  </div>
                  <div className="text">
                    <p>
                    The Foundation of Your Dream: Golden Ratio Design is a leading architectural design studio with a team of award-winning designers who craft innovative, effective, and sustainable conceptual designs that perfectly align with your vision and site context. We translate ideas into beautiful, buildable realities.
                    </p>
                  </div>
                </div>
              </li>

              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {ICONS.drafting}
                    <img className="back" src={backSrc} alt="" />
                  </span>
                  <div className="title">
                    <h3>Technical Drafting &amp; Documentation</h3>
                  </div>
                  <div className="text">
                    <p>
                    Precision in Every Detail: Golden Ratio Design delivers detailed and accurate construction drawings and documentation (CAD, BIM). Our meticulous approach ensures smooth permitting and execution, providing contractors with clear, effective blueprints for a successful build.
                    </p>
                  </div>
                </div>
              </li>

              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {ICONS.modeling}
                    <img className="back" src={backSrc} alt="" />
                  </span>
                  <div className="title">
                    <h3>3D Modeling &amp; Visualization</h3>
                  </div>
                  <div className="text">
                    <p>
                    See It Before You Build It: Golden Ratio Design brings your project to life with stunning, photo-realistic 3D renderings and immersive virtual tours. This crucial service helps you visualize materials, lighting, and scale, ensuring every detail is perfect before construction begins.
                    </p>
                  </div>
                </div>
              </li>

              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {ICONS.construction}
                    <img className="back" src={backSrc} alt="" />
                  </span>
                  <div className="title">
                    <h3>Construction Administration &amp; Oversight</h3>
                  </div>
                  <div className="text">
                    <p>
                    Ensuring Design Integrity: We provide on-site services, including regular site visits, quality control checks, and contractor coordination. This oversight guarantees that the built structure precisely adheres to the design specifications and maintains the highest standards of craftsmanship.
                    </p>
                  </div>
                </div>
              </li>

              <li
                className="simple text wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="inner_text">
                      <h3>Do You Want Something Different?</h3>
                    </div>
                    <div className="aali_tm_button border">
                      <a className="anchor" href="#contact">
                        <span>Let&apos;s Talk {msg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
