import { useEffect, useState } from "react";
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
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/001.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/002.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/003.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/004.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/005.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/006.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/007.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/008_1.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/009.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0010.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0011.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0012.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0013.webp",
  "Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/0014.webp",
];
const ADEEL_KITCHEN = [
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/06.webp",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/07.webp",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/08.webp",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/11.webp",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/14.webp",
  "Pictures/ADEEL KITCHEN WITH DINING RENDERS/15.webp",
];
const AMIN_LAKHANI_DINING_RENDERS = [
  "Pictures/AMIN LAKHANI DINING RENDERS/03.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/04.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/05.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/06.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/07.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/08.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/09.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/10.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/11.webp",
  "Pictures/AMIN LAKHANI DINING RENDERS/12.webp",
];
const AMIN_LAKHANI_DRAWING_RENDERS = [
  "Pictures/AMIN LAKHANI DRAWING RENDERS/02.webp",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/03.webp",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/04.webp",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/07.webp",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/08.webp",
  "Pictures/AMIN LAKHANI DRAWING RENDERS/09.webp",
];
const AMIN_LAKLHANI_KITCHEN_1_RENDERS = [
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/002.webp",
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/003.webp",
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/004.webp",
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/005.webp",
  "Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/007.webp",
];
const CONF_ROOM_SGS_RENDERS = [
  "Pictures/CONF ROOM SGS RENDERS/01.webp",
  "Pictures/CONF ROOM SGS RENDERS/02.webp",
  "Pictures/CONF ROOM SGS RENDERS/03.webp",
  "Pictures/CONF ROOM SGS RENDERS/04.webp",
  "Pictures/CONF ROOM SGS RENDERS/05.webp",
  "Pictures/CONF ROOM SGS RENDERS/06.webp",
  "Pictures/CONF ROOM SGS RENDERS/07.webp",
  "Pictures/CONF ROOM SGS RENDERS/08.webp",
  "Pictures/CONF ROOM SGS RENDERS/09.webp",
  "Pictures/CONF ROOM SGS RENDERS/10.webp",
];
const MD_ROOM_SGS_RENDERS = [
  "Pictures/MD ROOM SGS RENDERS/01.webp",
  "Pictures/MD ROOM SGS RENDERS/02.webp",
  "Pictures/MD ROOM SGS RENDERS/03.webp",
  "Pictures/MD ROOM SGS RENDERS/04.webp",
  "Pictures/MD ROOM SGS RENDERS/05.webp",
  "Pictures/MD ROOM SGS RENDERS/06.webp",
  "Pictures/MD ROOM SGS RENDERS/07.webp",
  "Pictures/MD ROOM SGS RENDERS/08.webp",
  "Pictures/MD ROOM SGS RENDERS/09.webp",
];

const COMMERCIAL_CALIFORNIA_PIZZA = [
  "Pictures/Commercial/CALIFORNIA_PIZZA/001.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/002.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/003.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/004.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-14-02-41_Enscape scene 2.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-14-22-43_Enscape scene 1.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-04-54_Enscape scene 33.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-06-32_Enscape scene 32.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-09-29_Enscape scene 26.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-11-23_Enscape scene 25.webp",
  "Pictures/Commercial/CALIFORNIA_PIZZA/Enscape_2025-09-06-21-17-15_Enscape scene 31.webp",
]

const COMMERCIAL_CLASSROOM = [
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 1.webp",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 3.webp",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 4.webp",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 5.webp",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 7.webp",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 8.webp",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 9.webp",
  "Pictures/Commercial/CLASSROOM/CLASSROOM VIEW 11.webp",
]

const COMMERCIAL_HARIS_OFFICE = [
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-12-12-18-31_Enscape scene 9.webp",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-05-14_Enscape scene 23.webp",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-14-16_Enscape scene 24.webp",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-19-10_Enscape scene 26.webp",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-22-51_Enscape scene 33.webp",
  "Pictures/Commercial/HARIS_OFFICE/Enscape_2025-11-14-18-26-49_Enscape scene 34.webp",

]

const INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN = [
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/DRAWING/Enscape_2025-10-07-01-07-04_Enscape scene 6.webp",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/DRAWING/Enscape_2025-10-07-01-09-42_Enscape scene 1.webp",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/DRAWING/Enscape_2025-10-07-01-17-02_Enscape scene 7.webp",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/DRAWING/Enscape_2025-10-07-01-19-28_Enscape scene 8.webp",
]


const INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_KITCHEN_LIVING = [

  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-22-17-30-48_Enscape scene 15.webp",
"Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-22-17-41-15_Enscape scene 16.webp",
"Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-22-18-44-54_Enscape scene 18.webp",
"Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-23-16-02-52_PROFILE VIEW - 2.webp",
"Pictures/Interior/240 SQ YDS AHMED YAR KHAN/KITCHEN & LIVING/Enscape_2025-11-23-16-20-01_Enscape scene 20.webp"
]

const INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_MASTERBED = [
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-16-18-41-47_Enscape scene 4.webp",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-17-00-44-39_Enscape scene 25.webp",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-17-00-48-32_Enscape scene 26.webp",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-18-14-30-27_Enscape scene 34.webp",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-25-12-30-16_Enscape scene 21.webp",
  "Pictures/Interior/240 SQ YDS AHMED YAR KHAN/MASTERBED/Enscape_2025-10-25-12-34-07_Enscape scene 28.webp"
]

const INTERIOR_ALFIE_LIVING_KITCHEN = [
  
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-15-45-29_Enscape scene 10.webp",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-03-40_Enscape scene 11 (1).webp",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-03-40_Enscape scene 11.webp",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-05-35_Enscape scene 12 (1).webp",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-05-35_Enscape scene 12 (2).webp",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-05-35_Enscape scene 12 (3).webp",
  "Pictures/Interior/ALFIE LIVING & KITCHEN/Enscape_2025-08-21-16-05-35_Enscape scene 12.webp"
]


const RESIDENTIAL_1400_SQ_YDS = [
  "Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-30-57_EXTERIOR WITHOUT BOUNDARY.webp",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-32-43_EXTERIOR WITHOUT BOUNDARY 2.webp",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-34-41_WIDE ANGLE 1.webp",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-36-33_WIDE ANGLE 2.webp",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-22-47-05_SQUARE VIEW 4 NEW.webp",
"Pictures/Residential/1400 SQ YDS/Enscape_2025-04-08-23-17-29_FRONT VIEW NEW.webp"
]

const RESIDENTIAL_2000_SQ_YDS_INDOOR_BAR_B_Q_GAMES = [
  "Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742326753143.webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742326943402.webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327023543.webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327107676.webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327177855 (1).webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327300585.webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327365149 (1).webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327503808.webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/1742327632801.webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/SAVE_20250319_240716.webp",
"Pictures/Residential/2000 SQ YDS/INDOOR BAR B Q & GAMES/SAVE_20250319_240722.webp"
]

const RESIDENTIAL_2000_SQ_YDS_MASTERPLAN = [
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-12-22-39-51_Enscape scene 40.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-12-22-41-37_Enscape scene 41.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-12-22-51-06_Enscape scene 42.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-12-22-52-51_Enscape scene 39.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-09-33_Enscape scene 48.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-12-41_Enscape scene 49.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-18-00_Enscape scene 50.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-26-23_Enscape scene 51.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-34-05_Enscape scene 52.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-13-17-41-36_Enscape scene 52.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-14-09-59-29_Enscape scene 55.webp",
  "Pictures/Residential/2000 SQ YDS/MASTERPLAN/Enscape_2025-10-14-10-02-26_Enscape scene 56.webp"
]

const RESIDENTIAL_2000_SQ_YDS_PARENTS_BATH = [
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/0010.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/0011.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/0012.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/002.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/003.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/004.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/005.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/006.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/007.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/008.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/009.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/13.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/14.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/15.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/16.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/17.webp",
  "Pictures/Residential/2000 SQ YDS/PARENTS BATH/18.webp"
]

const WHATSAPP_UNKNOWN_FOLDER =[
  'Pictures/WhatsApp Unknown 2026-01-01/WhatsApp Image 2026-01-01 at 2.04.34 PM (1).webp',
  'Pictures/WhatsApp Unknown 2026-01-01/WhatsApp Image 2026-01-01 at 2.04.34 PM (2).webp',
  'Pictures/WhatsApp Unknown 2026-01-01/WhatsApp Image 2026-01-01 at 2.04.34 PM.webp',
  'Pictures/WhatsApp Unknown 2026-01-01/WhatsApp Image 2026-01-01 at 2.05.55 PM (1).webp',
  'Pictures/WhatsApp Unknown 2026-01-01/WhatsApp Image 2026-01-01 at 2.05.55 PM.webp',
]



const Portfolio = () => {

  const router = useRouter()
  console.log("router",router);
  console.log("Link",Link);
  // Category filtering via a clean cross-fade (no sliding reflow): fade the
  // grid out, swap which cards are shown while it's invisible, then fade in.
  const [filterKey, setFilterKey] = useState("*"); // drives card visibility (updates after fade)
  const [activeKey, setActiveKey] = useState("*"); // drives the active pill (updates instantly)
  const [isFading, setIsFading] = useState(false);

  const handleFilterKeyChange = (key) => {
    if (key === activeKey || isFading) return; // ignore re-clicks / mid-animation
    setActiveKey(key); // highlight the clicked tab immediately
    setIsFading(true); // zoom the cards out (CSS scale + opacity)
    setTimeout(() => {
      setFilterKey(key); // swap the visible cards while fully transparent
      // Zoom the new set back in only after the new layout has been painted.
      requestAnimationFrame(() => setIsFading(false));
    }, 200);
  };

  // True when a card of this category should be visible for the current filter.
  const isVisible = (category) => filterKey === "*" || filterKey === category;
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

  // Total photo count behind each card's modal (sum of its project galleries),
  // shown in the hover "View Gallery" badge.
  const galleryCounts = {
    1: [RESIDENTIAL_1400_SQ_YDS, RESIDENTIAL_2000_SQ_YDS_INDOOR_BAR_B_Q_GAMES, RESIDENTIAL_2000_SQ_YDS_PARENTS_BATH, RESIDENTIAL_2000_SQ_YDS_MASTERPLAN].reduce((n, a) => n + (a?.length || 0), 0),
    2: [INTERIOR_ALFIE_LIVING_KITCHEN, INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN, INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_KITCHEN_LIVING, INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_MASTERBED].reduce((n, a) => n + (a?.length || 0), 0),
    3: [COMMERCIAL_CALIFORNIA_PIZZA, COMMERCIAL_CLASSROOM, COMMERCIAL_HARIS_OFFICE, WHATSAPP_UNKNOWN_FOLDER].reduce((n, a) => n + (a?.length || 0), 0),
  };

  // Subtle 3D tilt-toward-cursor on the portfolio cards (vanilla-tilt is already
  // a project dependency). Loaded dynamically so it never runs during SSR.
  useEffect(() => {
    let nodes = [];
    let cancelled = false;
    import("vanilla-tilt").then(({ default: VanillaTilt }) => {
      if (cancelled) return;
      // Tilt the whole card (.list_inner). The clickable full-link overlay sits
      // on top of the photo, so mouse moves must be caught on the shared parent.
      nodes = Array.from(
        document.querySelectorAll(
          ".aali_tm_portfolio .portfolio_list .list_inner"
        )
      );
      if (nodes.length) {
        VanillaTilt.init(nodes, {
          max: 8,
          speed: 400,
          perspective: 1000,
          glare: false,
          scale: 1.02,
          gyroscope: false,
        });
      }
    });
    return () => {
      cancelled = true;
      nodes.forEach((n) => n.vanillaTilt && n.vanillaTilt.destroy());
    };
  }, []);

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
              style={{marginBottom: '30px'}}
            >
              {/* <span className="text-black-500">Selected works</span> */}
              <h3>CHECK OUR PORTFOLIO</h3>
            </div>
            <div className="portfolio_filter">
              <ul>
                {[
                  { key: "*", label: "All" },
                  { key: "residential", label: "Residential" },
                  { key: "interior", label: "Interior" },
                  { key: "commercial", label: "Commercial" },
                ].map((f) => (
                  <li key={f.key}>
                    <a
                      className={activeKey === f.key ? "current" : ""}
                      onClick={() => handleFilterKeyChange(f.key)}
                    >
                      {f.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="portfolio_list">
              <ul className={`gallery_zoom${isFading ? " is-fading" : ""}`}>
            
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
                      <h3>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
                      <span>{item.title}</span>
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
                <li className={`filter-item residential${isVisible("residential") ? "" : " is-hidden"}`}>
                  <div className="list_inner">
                    {/* <div className="image">
                    
                    </div> */}
                  <div className="portfolio_main_photos" >
                    <img src="Pictures/SAUDI_ARABIA_LIVING_ROOM_RENDERS/003.webp" alt="aali image" className="portfolio_main_photo_size" />
                    <div className="overlay" />
                    <div className="gallery_badge" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="13" height="13" rx="2" />
                        <path d="M8 21h11a2 2 0 0 0 2-2V8" />
                      </svg>
                      <span>View Gallery · {galleryCounts[1]} Photos</span>
                    </div>
                    <div className="details">
                      <h3>Residential</h3>
                      <span>Saudi Arabia Residential</span>
                    </div>
                  </div>
                    {/* <img src="SAUDI_ARABIA_LIVING_ROOM_RENDERS/New_folder/003.png" width={200} height={200}/> */}

                    <a
                      className="aali_tm_full_link"
                      // href="/portfolio"
                      onClick={() => setModal(1)}

                    />
                  </div>
                
                </li>
                <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal} isOpen={modal === 1}>
                      <div className="service_popup_informations">
                        <div className="main_title">
                          <h3>RESIDENTIAL 1400 SQ YDS</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={RESIDENTIAL_1400_SQ_YDS} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                      
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
                         <div className="main_title">
                          <h3>RESIDENTIAL 2000 SQ YDS INDOOR BAR BQ GAMES</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={RESIDENTIAL_2000_SQ_YDS_INDOOR_BAR_B_Q_GAMES} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                        <div className="main_title">
                          <h3>RESIDENTIAL 2000 SQ YDS PARENTS BATH</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={RESIDENTIAL_2000_SQ_YDS_PARENTS_BATH} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                        
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
                         <div className="main_title">
                          <h3>RESIDENTIAL 2000 SQ YDS MASTERPLAN</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={RESIDENTIAL_2000_SQ_YDS_MASTERPLAN} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                <li className={`filter-item interior${isVisible("interior") ? "" : " is-hidden"}${activeKey === "*" ? " st-1" : ""}`}>
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
                    <img src="Pictures/CONF ROOM SGS RENDERS/09.webp" alt="aali image" className="portfolio_main_photo_size"   />
                    <div className="overlay" />
                    <div className="gallery_badge" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="13" height="13" rx="2" />
                        <path d="M8 21h11a2 2 0 0 0 2-2V8" />
                      </svg>
                      <span>View Gallery · {galleryCounts[2]} Photos</span>
                    </div>
                    <div className="details">
                      <h3>Interior</h3>
                      <span>Ariel View Appartment</span>
                    </div>
                  </div>
                    <a
                      className="aali_tm_full_link "
                      // href="#"
                      onClick={() => setModal(2)}
                    />
                  </div>
                </li>
                <div className={modal === 2 ? "" : "hidden_content"}>
                    <ModalBox close={setModal} isOpen={modal === 2}>
                      <div className="service_popup_informations">
                         <div className="main_title">
                          <h3>INTERIOR ALFIE LIVING KITCHEN</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={INTERIOR_ALFIE_LIVING_KITCHEN} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                         <div className="main_title">
                          <h3>INTERIOR 240 SQ YDS AHMED YAR KHAN</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                         <div className="main_title">
                          <h3>INTERIOR 240 SQ YDS AHMED YAR KHAN KITCHEN LIVING</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_KITCHEN_LIVING} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                          <div className="main_title">
                          <h3>INTERIOR 240 SQ YDS AHMED YAR KHAN MASTERBED</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_MASTERBED} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                      
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
                <li className={`filter-item commercial${isVisible("commercial") ? "" : " is-hidden"}${activeKey === "*" ? " st-2" : ""}`}>
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

                    <img src="Pictures/AMIN LAKLHANI KITCHEN 1 RENDERS/002.webp" alt="aali image" className="portfolio_main_photo_size"  />
                    <div className="overlay" />
                    <div className="gallery_badge" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="13" height="13" rx="2" />
                        <path d="M8 21h11a2 2 0 0 0 2-2V8" />
                      </svg>
                      <span>View Gallery · {galleryCounts[3]} Photos</span>
                    </div>
                    <div className="details">
                      <h3>Commercial</h3>
                      <span>Lavish Restaurant</span>
                    </div>
                </div>
                    <a
                      className="aali_tm_full_link"
                      // href="#"
                      onClick={() => setModal(3)}
                    />
                  </div>
                </li>
                <div className={modal === 3 ? "" : "hidden_content"}>
                    <ModalBox close={setModal} isOpen={modal === 3}>
                      <div className="service_popup_informations">
                         <div className="main_title">
                          <h3>COMMERCIAL CALIFORNIA PIZZA</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={COMMERCIAL_CALIFORNIA_PIZZA} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                         <div className="main_title">
                          <h3>COMMERCIAL CLASSROOM</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={COMMERCIAL_CLASSROOM} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                         <div className="main_title">
                          <h3>COMMERCIAL HARIS OFFICE</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={COMMERCIAL_HARIS_OFFICE} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                         <div className="main_title">
                          <h3>COMMERCIAL HARIS OFFICE</h3>
                          {/* <span className="price">
                            Starts from <span>$49</span>
                          </span> */}
                        </div>
                        <Carousel images={WHATSAPP_UNKNOWN_FOLDER} />
                        {/* <div className="image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/service/1.jpg"
                          />
                        </div> */}
                       
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
                      <ModalBox close={setModal} isOpen={modal === 1}>
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
                      <ModalBox close={setModal} isOpen={modal === 2}>
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
