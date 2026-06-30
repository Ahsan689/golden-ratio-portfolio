import { useEffect, useState, useRef } from "react";
import { fb, insta, msg, twitter } from "../svgImage";
import { parallax } from "../utilits";
// import Video from "../videos/Main title page animation with logos.mp4"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export async function getServerSideProps() {
  // Perform any server-side operations, e.g., fetching video metadata
  return {
    props: {
      videoSrc: "videos/Main-title-page-animation-with-logos.mp4",
      videoType: "video/mp4"
    }
  };
}

const Home = ({videoSrc, videoType}) => {
  const [text, setText] = useState(1);
  const videoref = useRef()
  useEffect(() => {
    // parallax();
    // videoref.current.Play()
    const interval = setInterval(() => {
      setText(text < 3 ? text + 1 : 1);
    }, 5000);
    return () => clearInterval(interval);
  },[]);

//  useEffect(() => {
//   if(videoref.current){
//     videoref.current.addEventListener('loadeddata', () => {
//       videoref.current?.play();
//     });
    
//   }
//   }, [])

const replayVideo = () => {
  const videoElement = document.getElementById("video");
  if (videoElement) {
      videoElement.play();
  }
}
  return (
    <div className="aali_tm_section " id="home">
      <div className="aali_tm_hero">
      {/* <video  style={{width:"100%",height:"auto"}}  src={videoSrc} type={videoType} autoPlay muted loop preload="auto" /> */}
      <video id="video" autoPlay muted loop preload="metadata" onEnded={replayVideo} style={{width:"100%",height:"auto"}} >
        <source src={"/videos/main-title-page-animation-with-logos.mp4"} type={"video/mp4"} />
        Your browser does not support the video tag.
      </video>

        {/* <div className="container">
          <div className="hero_inner">
            <div className="content">

              <span className="hello">Hello, {`I'm`}</span>
              <h3 className="name">Aali</h3>
              <div className="job">
                <span className="cd-headline rotate-1">
                  {" "}
                  <span className="blc">Creative </span>
                  <span className="cd-words-wrapper">
                    <b className={text === 1 ? "is-visible" : "is-hidden"}>
                      Designer
                    </b>
                    <b className={text === 2 ? "is-visible" : "is-hidden"}>
                      Developer
                    </b>
                    <b className={text === 3 ? "is-visible" : "is-hidden"}>
                      Freelancer
                    </b>
                  </span>
                </span>
              </div>
              <div className="hero_buttons">
                <div className="aali_tm_button">
                  <a className="anchor" href="#contact">
                    <span>Say Hello {msg}</span>
                  </a>
                </div>
                <div className="simple_button">
                  <a className="anchor" href="#about">
                    About Me
                  </a>
                </div>
              </div>
              <div className="aali_tm_down">
                <div className="down-icon white top_120">
                  <a className="anchor" href="#about">
                    <svg
                      width="26px"
                      height="100%"
                      viewBox="0 0 247 390"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5",
                      }}
                    >
                      <path
                        id="wheel"
                        d="M123.359,79.775l0,72.843"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: 20,
                        }}
                      />
                      <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: 20,
                        }}
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="avatar parallax" style={{ position: "absolute" }}>
              <div className="main">
                <img
                  src="img/hero/1.png"
                  alt="image"
                  className="layer"
                  data-depth="0.1"
                />
              </div>
              <span className="one">
                <span className="in layer" data-depth="0.14" />
              </span>
              <span className="two">
                <span className="in layer" data-depth="0.18" />
              </span>
              <span className="three">
                <span className="in layer" data-depth="0.22" />
              </span>
              <span className="four">
                <span className="in layer" data-depth="0.26" />
              </span>
              <span className="five">
                <span className="in layer" data-depth="0.3" />
              </span>
              <h3 className="stroke_text">
                <span>Aali</span>
              </h3>
            </div>
          </div>
        </div> */}
        
        {/* <div className="socials">
          <ul>
            <li>
              <a href="#"><FaFacebook/></a>
            </li>
            <li>
              <a href="#"><FaInstagram/></a>
            </li>
            <li>
              <a href="#"><FaLinkedinIn/></a>
            </li>
            <li>
              <a href="#"><FaWhatsapp/></a>
            </li>
            <li>
              <a href="#"><BsTiktok/></a>
            </li>
          </ul>
        </div> */}
      
        {/* <div className="hero_mail">
          <a className="line_anim" href="#">
            hello@aali.com
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
