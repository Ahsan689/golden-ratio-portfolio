import { useEffect, useState } from "react";
import {
  camera,
  cameraDark,
  msg,
  pen,
  penDark,
  user,
  userDark,
  web,
  webDark,
  construction,
  hammer
} from "../svgImage";
import ModalBox from "./ModalBox";
import Carousel from "./Carousel";

const Service = ({ dark }) => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "service_hidden_details");
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);

  const images = [
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/001.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/002.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/003.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/004.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/005.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/006.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/007.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/008_1.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/009.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/0010.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/0011.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/0012.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/0013.png",
  "SAUDI ARABIA LIVING ROOM RENDERS/New folder/0014.png",
];


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
                    <span>What I Do</span>
                    <h3>📐 Our Architectural Services</h3>
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
                    {dark ? cameraDark : camera}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  <div className="title">
                    <h3>Conceptual Design & Vision</h3>
                    {/*<span className="price">*/}
                    {/*  Starts from <span>$49</span>*/}
                    {/*</span>*/}
                  </div>
                  <div className="text">
                    <p>
                    The Foundation of Your Dream: Golden Ratio Design is a leading architectural design studio with a team of award-winning designers who craft innovative, effective, and sustainable conceptual designs that perfectly align with your vision and site context. We translate ideas into beautiful, buildable realities.
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/1.jpg"
                    alt="aali image"
                  />
                </div>
               
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>✍️ Technical Drafting & Documentation</h3>
                    {/*<span className="price">*/}
                    {/*  Starts from <span>$59</span>*/}
                    {/*</span>*/}
                  </div>
                  <div className="text">
                    <p>
                    Precision in Every Detail: Golden Ratio Design delivers detailed and accurate construction drawings and documentation (CAD, BIM). Our meticulous approach ensures smooth permitting and execution, providing contractors with clear, effective blueprints for a successful build.
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/3.jpg"
                    alt="aali image"
                  />
                </div>
             
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>✨ 3D Modeling & Visualization</h3>
                    {/*<span className="price">*/}
                    {/*  Starts from <span>$69</span>*/}
                    {/*</span>*/}
                  </div>
                  <div className="text">
                    <p>
                    See It Before You Build It: Golden Ratio Design brings your project to life with stunning, photo-realistic 3D renderings and immersive virtual tours. This crucial service helps you visualize materials, lighting, and scale, ensuring every detail is perfect before construction begins.
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/2.jpg"
                    alt="aali image"
                  />
                </div>
               
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? construction : user}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>🛠️ Construction Administration & Oversight</h3>
                    {/*<span className="price">*/}
                    {/*  Starts from <span>$79</span>*/}
                    {/*</span>*/}
                  </div>
                  <div className="text">
                    <p>
                    Ensuring Design Integrity: We provide on-site services, including regular site visits, quality control checks, and contractor coordination. This oversight guarantees that the built structure precisely adheres to the design specifications and maintains the highest standards of craftsmanship.
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(4)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/4.jpg"
                    alt="aali image"
                  />
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
                        <span>Knock Me {msg}</span>
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
