import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'
import {
  fb,
  insta,
  maximize,
  soundcloud,
  text,
  twitter,
  vimeo,
  youtube,
} from "../svgImage";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";
import Carousel from "../components/Carousel";
import Modal from "../components/ModalNew";
import CloseButton from "./CloseButton";

const images = [
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/001.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/002.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/003.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/004.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/005.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/006.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/007.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/008_1.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/009.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0010.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0011.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0012.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0013.png",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0014.png",
];
const ADEEL_KITCHEN = [
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/06.png",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/07.png",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/08.png",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/11.png",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/14.jpg",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/15.jpg",
];
const AMIN_LAKHANI_DINING_RENDERS = [
  "Pictures/AMIN LAKHANI DINING RENDERS/03.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/04.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/05.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/06.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/07.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/08.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/09.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/10.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/11.jpg",
  "Pictures/AMIN LAKHANI DINING RENDERS/12.jpg",
];
const AMIN_LAKHANI_DRAWING_RENDERS = [
  "Pictures/AMIN LAKHANI DRAWING RENDERS/02.jpg",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/03.jpg",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/04.jpg",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/07.jpg",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/08.jpg",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/09.jpg",
];
const AMIN_LAKLHANI_KITCHEN_1_RENDERS = [
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/002.jpg",
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/003.jpg",
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/004.jpg",
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/005.jpg",
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/007.jpg",
];
const CONF_ROOM_SGS_RENDERS = [
  "Pictures/CONF ROOM SGS RENDERS/01.jpg",
  "Pictures/CONF ROOM SGS RENDERS/02.jpg",
  "Pictures/CONF ROOM SGS RENDERS/03.jpg",
  "Pictures/CONF ROOM SGS RENDERS/04.jpg",
  "Pictures/CONF ROOM SGS RENDERS/05.jpg",
  "Pictures/CONF ROOM SGS RENDERS/06.jpg",
  "Pictures/CONF ROOM SGS RENDERS/07.jpg",
  "Pictures/CONF ROOM SGS RENDERS/08.jpg",
  "Pictures/CONF ROOM SGS RENDERS/09.jpg",
  "Pictures/CONF ROOM SGS RENDERS/10.jpg",
];
const MD_ROOM_SGS_RENDERS = [
  "Pictures/MD ROOM SGS RENDERS/01.png",
  "Pictures/MD ROOM SGS RENDERS/02.png",
  "Pictures/MD ROOM SGS RENDERS/03.png",
  "Pictures/MD ROOM SGS RENDERS/04.png",
  "Pictures/MD ROOM SGS RENDERS/05.png",
  "Pictures/MD ROOM SGS RENDERS/06.png",
  "Pictures/MD ROOM SGS RENDERS/07.png",
  "Pictures/MD ROOM SGS RENDERS/08.png",
  "Pictures/MD ROOM SGS RENDERS/09.png",
];

const COMMERCIAL_CALIFORNIA_PIZZA = [
  "Pictures/Commercial/CALIFORNIA_PIZZA/001.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/002.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/003.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/004.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-14-02-41_Enscape scene 2.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-14-22-43_Enscape scene 1.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-04-54_Enscape scene 33.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-06-32_Enscape scene 32.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-09-29_Enscape scene 26.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-11-23_Enscape scene 25.jpg",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-17-15_Enscape scene 31.jpg",
]

const COMMERCIAL_CLASSROOM = [
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 1.jpg",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 3.jpg",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 4.jpg",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 5.jpg",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 7.jpg",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 8.jpg",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 9.jpg",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 11.jpg",
]

const COMMERCIAL_HARIS_OFFICE = [
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-12-12-18-31_Enscape scene 9.jpg",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-05-14_Enscape scene 23.jpg",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-14-16_Enscape scene 24.jpg",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-19-10_Enscape scene 26.jpg",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-22-51_Enscape scene 33.jpg",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-26-49_Enscape scene 34.jpg",

]

const INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN = [
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/DRAWING/Enscape_2025-10-07-01-07-04_Enscape scene 6.jpg",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/DRAWING/Enscape_2025-10-07-01-09-42_Enscape scene 1.jpg",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/DRAWING/Enscape_2025-10-07-01-17-02_Enscape scene 7.jpg",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/DRAWING/Enscape_2025-10-07-01-19-28_Enscape scene 8.jpg",
]


const INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_KITCHEN_LIVING = [

  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-22-17-30-48_Enscape scene 15.jpg",
"Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-22-17-41-15_Enscape scene 16.jpg",
"Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-22-18-44-54_Enscape scene 18.jpg",
"Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-23-16-02-52_PROFILE VIEW - 2.jpg",
"Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-23-16-20-01_Enscape scene 20.jpg"
]

const INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_MASTERBED = [
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-16-18-41-47_Enscape scene 4.jpg",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-17-00-44-39_Enscape scene 25.jpg",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-17-00-48-32_Enscape scene 26.jpg",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-18-14-30-27_Enscape scene 34.jpg",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-25-12-30-16_Enscape scene 21.jpg",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-25-12-34-07_Enscape scene 28.jpg"
]

const INTERIOR_ALFIE_LIVING_KITCHEN = [
  
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-15-45-29_Enscape scene 10.jpg",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-03-40_Enscape scene 11 (1).jpg",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-03-40_Enscape scene 11.jpg",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-05-35_Enscape scene 12 (1).jpg",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-05-35_Enscape scene 12 (2).jpg",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-05-35_Enscape scene 12 (3).jpg",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-05-35_Enscape scene 12.jpg"
]


const RESIDENTIAL_1400_SQ_YDS = [
  "Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-30-57_EXTERIOR WITHOUT BOUNDARY.jpg",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-32-43_EXTERIOR WITHOUT BOUNDARY 2.jpg",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-34-41_WIDE ANGLE 1.jpg",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-36-33_WIDE ANGLE 2.jpg",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-47-05_SQUARE VIEW 4 NEW.jpg",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-23-17-29_FRONT VIEW NEW.jpg"
]

const RESIDENTIAL_2000_SQ_YDS_INDOOR_BAR_B_Q_GAMES = [
  "Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742326753143.jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742326943402.jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327023543.jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327107676.jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327177855 (1).jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327300585.jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327365149 (1).jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327503808.jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327632801.jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/SAVE_20250319_240716.jpg",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/SAVE_20250319_240722.jpg"
]

const RESIDENTIAL_2000_SQ_YDS_MASTERPLAN = [
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-12-22-39-51_Enscape scene 40.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-12-22-41-37_Enscape scene 41.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-12-22-51-06_Enscape scene 42.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-12-22-52-51_Enscape scene 39.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-09-33_Enscape scene 48.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-12-41_Enscape scene 49.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-18-00_Enscape scene 50.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-26-23_Enscape scene 51.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-34-05_Enscape scene 52.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-41-36_Enscape scene 52.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-14-09-59-29_Enscape scene 55.jpg",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-14-10-02-26_Enscape scene 56.jpg"
]

const RESIDENTIAL_2000_SQ_YDS_PARENTS_BATH = [
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/0010.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/0011.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/0012.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/002.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/003.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/004.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/005.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/006.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/007.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/008.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/009.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/13.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/14.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/15.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/16.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/17.jpg",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/18.jpg"
]



const Portfolio = () => {

  const router = useRouter()
  console.log("router",router);
  console.log("Link",Link);
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("residential");
  // useEffect(() => {
  //   setTimeout(() => {
  //     isotope.current = new Isotope(".gallery_zoom", {  
  //       itemSelector: ".filter-item",
  //       layoutMode: "fitRows",
  //     });
  //     // isotope.current.arrange({ filter: '.residential' });
  //   }, 300);
  //   return () => isotope.current.destroy();
  // }, []);
  
  // useEffect(() => {
  //   // dataImage();
  //   // aTagClick();
  //   if (isotope.current) {
  //     console.log("isotope.current",isotope.current);
  //     console.log("filterKey",filterKey);
  //     // filterKey === "*"
  //     //   ? isotope.current.arrange({ filter: `*` })
  //     //   : isotope.current.arrange({ filter: `.${filterKey}` });
  //     isotope.current.arrange({ filter: `.${filterKey}` });
  //     // return () => isotope.current.destroy();
  //   }
  // }, [filterKey]);
  
  const handleFilterKeyChange = (key) => {
    setFilterKey(key);

     // Trigger the zoom-out animation before filtering
     const items = document.querySelectorAll('.filter-item');
     items.forEach(item => {
       if (!item.classList.contains(key)) {
         item.classList.add('is-hidden');
       } else {
         item.classList.remove('is-hidden');
       }
     });
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Model Box
  const [modal, setModal] = useState(0);
  const hidden = (value) => {
    console.log(value, "hidden....");
    value === modal ? "" : "news_hidden_details";
  };

  console.log("modal", modal);

  const [showModal, setShowModal] = useState(false);

  const handleNavigate =() => {
    router.push("/portfolio")
  }

  const portfolioItems = [
    {
      category: 'residential',
      videoSrc: 'videos/RESIDENTIAL CARD BACK ANIMATION VIDEO.mp4',
      title: 'Saudi Arabia Residential',
    },
    {
      category: 'residential',
      videoSrc: 'videos/RESIDENTIAL CARD BACK ANIMATION VIDEO.mp4',
      title: 'Living Room Residential',
    },
    {
      category: 'residential',
      videoSrc: 'videos/RESIDENTIAL CARD BACK ANIMATION VIDEO.mp4',
      title: 'Dining Area Residential',
    },
    {
      category: 'interior',
      videoSrc: 'videos/INTERIOR BACK CARD ANIMATION.mp4',
      title: 'Ariel View Appartment',
    },
    {
      category: 'commercial',
      videoSrc: 'videos/INTERIOR CARD BACK ANIMATION VIDEO.mp4',
      title: 'Lavish Restaurant',
    },
  ];

  const filteredItems = portfolioItems.filter(item => item.category === filterKey);


  // console.log("filterKey:",filterKey);
  return (
    <>
      <div className="aali_tm_skills" id="portfolio">
        <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
          <div className="container">
            <div
              className="aali_tm_main_title"
              data-text-align="center"
              data-color="light"
            >
              {/* <span className="text-black-500">Selected works</span> */}
              <h3>CHECK OUR PORTFOLIO</h3>
            </div>
            <div className="portfolio_filter">
              {/* <ul>
                <li>
                  <a onClick={()=> handleFilterKeyChange("*")} className="current">
                    All
                  </a>
                </li>
                <li>
                  <a className="current" onClick={()=>handleFilterKeyChange("residential")} style={{color:filterKey==="residential"?'#14b8a6':""}}>Residential</a>
                </li>
                <li>
                  <a onClick={ ()=>handleFilterKeyChange("interior")}style={{color:filterKey==="interior"?'#14b8a6':""}}>Interior</a>
                </li>
                <li>
                  <a onClick={()=>handleFilterKeyChange("commercial")}style={{color:filterKey==="commercial"?'#14b8a6':""}}>Commercial</a>
                </li>
                {/* <li>
                  <a onClick={handleFilterKeyChange("image")}>Image</a>
                </li>
                <li>
                  <a onClick={handleFilterKeyChange("detail")}>Detail</a>
                </li>
              </ul> */}
            </div>

            <div className="portfolio_list">
              <ul className="gallery_zoom">
            
              {/* {filteredItems.map((item, index) => (
                <li key={index} className={`filter-item ${item.category}`}>
                  <div className="list_inner">
                    <div className="image">
                      <video
                        src={item.videoSrc}
                        style={{ width: '100%', height: '285px' }}
                        autoPlay
                        muted
                        loop
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <span>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <a
                      className="aali_tm_full_link"
                      href="#"
                      // onClick={() => setShowModal(true)}
                      onClick={() => setModal(1)}
                    />
                  </div>
              
                </li>
              ))} */}
                <li className="filter-item residential">
                  <div className="list_inner">
                    {/* <div className="image">
                    
                    </div> */}
                  <div className="portfolio_main_photos" >
                    <img src="Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/003.png" alt="aali image" className="portfolio_main_photo_size" />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(211, 211, 211, 0.5)' }} /> */}
                  </div>
                    {/* <img src="SAUDI_ARABIA_LIVING_ROOM_RENDERS/New_folder/003.png" width={200} height={200}/> */}

                    <div className="overlay" >
                      <div className="details">
                        <h3>Residential</h3>
                        <h6>Saudi Arabia Residential</h6>
                      
                      </div>
                    </div>
                    <a
                      className="aali_tm_full_link"
                      // href="/portfolio"
                      onClick={() => setModal(1)}

                    />
                  </div>
                
                </li>
                <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="service_popup_informations">
                        <Carousel images={RESIDENTIAL_1400_SQ_YDS} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>RESIDENTIAL 1400 SQ YDS</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        {/* <div className="descriptions">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p>
                        
                        </div> */}
                      </div>
                      <div className="service_popup_informations">
                        <Carousel images={RESIDENTIAL_2000_SQ_YDS_INDOOR_BAR_B_Q_GAMES} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>RESIDENTIAL 2000 SQ YDS INDOOR BAR BQ GAMES</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        {/* <div className="descriptions">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p>
                        
                        </div> */}
                      </div>
                      <div className="service_popup_informations">
                        <Carousel images={RESIDENTIAL_2000_SQ_YDS_PARENTS_BATH} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>RESIDENTIAL 2000 SQ YDS PARENTS BATH</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        {/* <div className="descriptions">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p>
                          <p>
                            In today’s digital world, your website is the first
                            interaction consumers have with your business.{" "}
                            {`That's`}
                            why almost 95 percent of a user’s first impression
                            relates to web design. It’s also why web design
                            services can have an immense impact on your company’s
                            bottom line.
                          </p>
                      
                        </div> */}
                      </div>
                      <div className="service_popup_informations">
                        <Carousel images={RESIDENTIAL_2000_SQ_YDS_MASTERPLAN} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>RESIDENTIAL 2000 SQ YDS MASTERPLAN</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        {/* <div className="descriptions">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p>
                          <p>
                            In today’s digital world, your website is the first
                            interaction consumers have with your business.{" "}
                            {`That's`}
                            why almost 95 percent of a user’s first impression
                            relates to web design. It’s also why web design
                            services can have an immense impact on your company’s
                            bottom line.
                          </p>
                      
                        </div> */}
                      </div>
                    </ModalBox>
                  </div>
                {/* <li className="filter-item residential">
                  <div className="list_inner">
                    <div className="image">
                      <video
                        src="videos/RESIDENTIAL CARD BACK ANIMATION VIDEO.mp4"
                        style={{ width: "100%", height: "285px" }}
                        autoPlay
                        muted
                        loop
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <h3>Residential</h3>
                      <h6>Living Room Residential</h6>
                    </div>
                    <a
                      className="aali_tm_full_link"
                      href="#"
                      onClick={() => setShowModal(true)}
                    />

                  
                  </div>
                </li> */}
                {/* <li className="filter-item residential">
                  <div className="list_inner">
                    <div className="image">
                      <video
                        src="videos/RESIDENTIAL CARD BACK ANIMATION VIDEO.mp4"
                        style={{ width: "100%", height: "285px" }}
                        autoPlay
                        muted
                        loop
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <h3>Residential</h3>
                      <h6>Dining Area Residential</h6>
                    </div>
                    <a
                      className="aali_tm_full_link"
                      href="#"
                      onClick={() => setShowModal(true)}
                    />

                    
                  </div>
                </li> */}
                <li className="filter-item interior">
                  <div className="list_inner">
                    {/* <div className="image">
                      <video
                        src="videos/INTERIOR BACK CARD ANIMATION.mp4"
                        style={{ width: "100%", height: "285px" }}
                        autoPlay
                        muted
                        loop
                      />
                    </div> */}
                  <div className="portfolio_main_photos" >
                    <img src="Pictures/CONF ROOM SGS RENDERS/09.jpg" alt="aali image" className="portfolio_main_photo_size"   />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(211, 211, 211, 0.5)' }} /> */}
                  </div>
                    <div className="overlay" />
                    <div className="details">
                      <h3>Interior</h3>
                      <h6>Ariel View Appartment</h6>
                    </div>
                    <a
                      className="aali_tm_full_link "
                      // href="#"
                      onClick={() => setModal(2)}
                    />
                  </div>
                </li>
                <div className={modal === 2 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="service_popup_informations">
                        <Carousel images={INTERIOR_ALFIE_LIVING_KITCHEN} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>INTERIOR ALFIE LIVING KITCHEN</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <div className="descriptions">
                          {/* <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p> */}
                        
                        </div>
                      </div>
                      <div className="service_popup_informations">
                        <Carousel images={INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>INTERIOR 240 SQ YDS AHMED YAR KHAN</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <div className="descriptions">
                          {/* <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p> */}
                        
                        </div>
                      </div>
                      <div className="service_popup_informations">
                        <Carousel images={INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_KITCHEN_LIVING} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>INTERIOR 240 SQ YDS AHMED YAR KHAN KITCHEN LIVING</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <div className="descriptions">
                          {/* <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p>
                          <p>
                            In today’s digital world, your website is the first
                            interaction consumers have with your business.{" "}
                            {`That's`}
                            why almost 95 percent of a user’s first impression
                            relates to web design. It’s also why web design
                            services can have an immense impact on your company’s
                            bottom line.
                          </p> */}
                      
                        </div>
                      </div>
                      <div className="service_popup_informations">
                        <Carousel images={INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_MASTERBED} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>INTERIOR 240 SQ YDS AHMED YAR KHAN MASTERBED</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        {/* <div className="descriptions">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p>
                          <p>
                            In today’s digital world, your website is the first
                            interaction consumers have with your business.{" "}
                            {`That's`}
                            why almost 95 percent of a user’s first impression
                            relates to web design. It’s also why web design
                            services can have an immense impact on your company’s
                            bottom line.
                          </p>
                      
                        </div> */}
                      </div>
                    </ModalBox>
                  </div>
                <li className="filter-item commercial">
                  <div className="list_inner">
                    {/* <div className="image">
                      <video
                        src="videos/INTERIOR CARD BACK ANIMATION VIDEO.mp4"
                        style={{ width: "100%", height: "285px" }}
                        autoPlay
                        muted
                        loop
                      />

                    </div> */}
                <div className="portfolio_main_photos">

                    <img src="Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/002.jpg" alt="aali image" className="portfolio_main_photo_size"  />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <h3>Commercial</h3>
                      <h6>Lavish Restaurant</h6>
                    </div>
                    <a
                      className="aali_tm_full_link"
                      // href="#"
                      onClick={() => setModal(3)}
                    />
                  </div>
                </li>
                <div className={modal === 3 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="service_popup_informations">
                        <Carousel images={COMMERCIAL_CALIFORNIA_PIZZA} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>COMMERCIAL CALIFORNIA PIZZA</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <div className="descriptions">
                          {/* <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p> */}
                        
                        </div>
                      </div>
                     
                      <div className="service_popup_informations">
                        <Carousel images={COMMERCIAL_CLASSROOM} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>COMMERCIAL CLASSROOM</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        {/* <div className="descriptions">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p>
                          <p>
                            In today’s digital world, your website is the first
                            interaction consumers have with your business.{" "}
                            {`That's`}
                            why almost 95 percent of a user’s first impression
                            relates to web design. It’s also why web design
                            services can have an immense impact on your company’s
                            bottom line.
                          </p>
                      
                        </div> */}
                      </div>
                      <div className="service_popup_informations">
                        <Carousel images={COMMERCIAL_HARIS_OFFICE} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        <div className="main_title">
                          <h3>COMMERCIAL HARIS OFFICE</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        {/* <div className="descriptions">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design team that creates innovative,
                            effective websites that capture your brand, improve
                            your conversion rates, and maximize your revenue to
                            help grow your business and achieve your goals.
                          </p>
                          <p>
                            In today’s digital world, your website is the first
                            interaction consumers have with your business.{" "}
                            {`That's`}
                            why almost 95 percent of a user’s first impression
                            relates to web design. It’s also why web design
                            services can have an immense impact on your company’s
                            bottom line.
                          </p>
                      
                        </div> */}
                      </div>
                    </ModalBox>
                  </div>

                {/* <li className="filter-item detail">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="aali image" />
                      <div className="main" data-img-url="img/portfolio/4.jpg" />
                    </div>
                    <div className="overlay" />
                    {text}
                    <div className="details">
                      <span>Detail</span>
                      <h3>Hippie Sabotage</h3>
                    </div>
                    <a
                      className="aali_tm_full_link portfolio_popup"
                      href="#"
                      onClick={() => setModal(1)}
                    />
                    <div className={modal === 1 ? "" : "hidden_content"}>
                      <ModalBox close={setModal}>
                        <div className="popup_details">
                          <div className="top_image">
                            <img src="img/thumbs/4-2.jpg" alt="" />
                            <div
                              className="main"
                              data-img-url="img/portfolio/4.jpg"
                            ></div>
                          </div>
                          <div className="portfolio_main_title">
                            <span>Detail</span>
                            <h3>Hippie Sabotage</h3>
                            <div></div>
                          </div>
                          <div className="main_details">
                            <div className="textbox">
                              <p>
                                We live in a world where we need to move quickly
                                and iterate on our ideas as flexibly as possible.
                                Building mockups strikes the ideal balance ease of
                                modification.
                              </p>
                              <p>
                                Mockups are useful both for the creative phase of
                                the project - for instance when {`you're`} trying
                                to figure out your user flows or the proper visual
                                hierarchy - and the production phase when they
                                will represent the target product.
                              </p>
                            </div>
                            <div className="detailbox">
                              <ul>
                                <li>
                                  <span className="first">Client</span>
                                  <span>Alvaro Morata</span>
                                </li>
                                <li>
                                  <span className="first">Category</span>
                                  <span>
                                    <a href="#">Detail</a>
                                  </span>
                                </li>
                                <li>
                                  <span className="first">Date</span>
                                  <span>March 07, 2021</span>
                                </li>
                                <li>
                                  <span className="first">Share</span>
                                  <ul className="share">
                                    <li>
                                      <a href="#">{fb}</a>
                                    </li>
                                    <li>
                                      <a href="#">{twitter}</a>
                                    </li>
                                    <li>
                                      <a href="#">{insta}</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="additional_images">
                            <ul>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                    <img
                                      src="img/thumbs/4-2.jpg"
                                      alt="aali image"
                                    />
                                    <div
                                      className="main"
                                      data-img-url="img/portfolio/1.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                    <img
                                      src="img/thumbs/4-2.jpg"
                                      alt="aali image"
                                    />
                                    <div
                                      className="main"
                                      data-img-url="img/portfolio/2.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                    <img
                                      src="img/thumbs/4-2.jpg"
                                      alt="aali image"
                                    />
                                    <div
                                      className="main"
                                      data-img-url="img/portfolio/3.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ModalBox>
                    </div>
                  </div>
                </li> */}
                {/* <li className="filter-item image">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="aali image" />
                      <div className="main" data-img-url="img/portfolio/5.jpg" />
                    </div>
                    <div className="overlay" />
                    {maximize}
                    <div className="details">
                      <span>Image</span>
                      <h3>Mockup Camera</h3>
                    </div>
                    <a
                      className="aali_tm_full_link zoom"
                      href="#"
                      onClick={() => showPopup("image", "img/portfolio/5.jpg")}
                    />
                  </div>
                </li> */}
                {/* <li className="filter-item detail">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="aali image" />
                      <div className="main" data-img-url="img/portfolio/6.jpg" />
                    </div>
                    <div className="overlay" />
                    {text}
                    <div className="details">
                      <span>Detail</span>
                      <h3>Good Present</h3>
                    </div>
                    <a
                      className="aali_tm_full_link portfolio_popup"
                      href="#"
                      onClick={() => setModal(2)}
                    />
                    <div className={modal === 2 ? "" : "hidden_content"}>
                      <ModalBox close={setModal}>
                        <div className="popup_details">
                          <div className="top_image">
                            <img src="img/thumbs/4-2.jpg" alt="" />
                            <div
                              className="main"
                              data-img-url="img/portfolio/6.jpg"
                            ></div>
                          </div>
                          <div className="portfolio_main_title">
                            <span>Detail</span>
                            <h3>Good Present</h3>
                            <div></div>
                          </div>
                          <div className="main_details">
                            <div className="textbox">
                              <p>
                                We live in a world where we need to move quickly
                                and iterate on our ideas as flexibly as possible.
                                Building mockups strikes the ideal balance ease of
                                modification.
                              </p>
                              <p>
                                Mockups are useful both for the creative phase of
                                the project - for instance when {`you're`} trying
                                to figure out your user flows or the proper visual
                                hierarchy - and the production phase when they
                                will represent the target product.
                              </p>
                            </div>
                            <div className="detailbox">
                              <ul>
                                <li>
                                  <span className="first">Client</span>
                                  <span>Alvaro Morata</span>
                                </li>
                                <li>
                                  <span className="first">Category</span>
                                  <span>
                                    <a href="#">Detail</a>
                                  </span>
                                </li>
                                <li>
                                  <span className="first">Date</span>
                                  <span>March 07, 2021</span>
                                </li>
                                <li>
                                  <span className="first">Share</span>
                                  <ul className="share">
                                    <li>
                                      <a href="#">{fb}</a>
                                    </li>
                                    <li>
                                      <a href="#">{twitter}</a>
                                    </li>
                                    <li>
                                      <a href="#">{insta}</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="additional_images">
                            <ul>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                    <img
                                      src="img/thumbs/4-2.jpg"
                                      alt="aali image"
                                    />
                                    <div
                                      className="main"
                                      data-img-url="img/portfolio/1.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                    <img
                                      src="img/thumbs/4-2.jpg"
                                      alt="aali image"
                                    />
                                    <div
                                      className="main"
                                      data-img-url="img/portfolio/2.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                    <img
                                      src="img/thumbs/4-2.jpg"
                                      alt="aali image"
                                    />
                                    <div
                                      className="main"
                                      data-img-url="img/portfolio/3.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ModalBox>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
     

      </div>
    

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <CloseButton onClose={() => setShowModal(false)}/>
        <Carousel images={images} />
      </Modal>
    </>
    // <div className=" " id="">
    //   {/* {video && <Popup close={setVideo} content={videoContent} />} */}
    // </div>
  );
};

export default Portfolio;
