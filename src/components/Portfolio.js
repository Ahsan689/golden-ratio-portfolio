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

// Display label per category key.
const CATEGORY_LABELS = {
  residential: "Residential",
  interior: "Interior",
  commercial: "Commercial",
};

// Every project shown in the portfolio grid. The cover defaults to the first
// image of each gallery; change `cover` to feature a different one.
const PROJECTS = [
  { id: "res-1400", category: "residential", title: "1400 Sq Yds Residence", images: RESIDENTIAL_1400_SQ_YDS },
  { id: "res-2000-bbq", category: "residential", title: "2000 Sq Yds — Indoor BBQ & Games", images: RESIDENTIAL_2000_SQ_YDS_INDOOR_BAR_B_Q_GAMES },
  { id: "res-2000-bath", category: "residential", title: "2000 Sq Yds — Parents' Bath", images: RESIDENTIAL_2000_SQ_YDS_PARENTS_BATH },
  { id: "res-2000-master", category: "residential", title: "2000 Sq Yds — Masterplan", images: RESIDENTIAL_2000_SQ_YDS_MASTERPLAN },
  { id: "int-alfie", category: "interior", title: "Alfie Living & Kitchen", images: INTERIOR_ALFIE_LIVING_KITCHEN },
  { id: "int-ayk-drawing", category: "interior", title: "240 Sq Yds — Drawing Room", images: INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN },
  { id: "int-ayk-kitchen", category: "interior", title: "240 Sq Yds — Kitchen & Living", images: INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_KITCHEN_LIVING },
  { id: "int-ayk-master", category: "interior", title: "240 Sq Yds — Master Bedroom", images: INTERIOR_240_SQ_YDS_AHMED_YAR_KHAN_MASTERBED },
  { id: "com-pizza", category: "commercial", title: "California Pizza", images: COMMERCIAL_CALIFORNIA_PIZZA },
  { id: "com-classroom", category: "commercial", title: "Classroom", images: COMMERCIAL_CLASSROOM },
  { id: "com-office", category: "commercial", title: "Haris Office", images: COMMERCIAL_HARIS_OFFICE },
].map((p) => ({ ...p, cover: p.images[0] }));



const FILTERS = [
  { key: "*", label: "All" },
  { key: "residential", label: "Residential" },
  { key: "interior", label: "Interior" },
  { key: "commercial", label: "Commercial" },
];

const Portfolio = () => {
  const [filterKey, setFilterKey] = useState("*"); // drives card visibility (after fade)
  const [activeKey, setActiveKey] = useState("*"); // drives active pill (instant)
  const [isFading, setIsFading] = useState(false);
  const [activeProject, setActiveProject] = useState(null); // open project modal

  const handleFilterKeyChange = (key) => {
    if (key === activeKey || isFading) return;
    setActiveKey(key);
    setIsFading(true);
    setTimeout(() => {
      setFilterKey(key);
      requestAnimationFrame(() => setIsFading(false));
    }, 200);
  };

  const isVisible = (category) => filterKey === "*" || filterKey === category;

  // Subtle 3D tilt on the project cards (loaded dynamically to avoid SSR).
  useEffect(() => {
    let nodes = [];
    let cancelled = false;
    import("vanilla-tilt").then(({ default: VanillaTilt }) => {
      if (cancelled) return;
      nodes = Array.from(
        document.querySelectorAll(".aali_tm_portfolio .portfolio_list .list_inner")
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

  // Stagger delay among the currently-visible cards for the zoom-in cascade.
  const visibleIds = PROJECTS.filter((p) => isVisible(p.category)).map((p) => p.id);
  const delayOf = (id) => {
    const i = visibleIds.indexOf(id);
    return isFading || i < 0 ? "0s" : `${Math.min(i, 10) * 0.04}s`;
  };

  return (
    <>
      <div className="aali_tm_skills" id="portfolio">
        <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
          <div className="container">
            <div
              className="aali_tm_main_title"
              data-text-align="center"
              data-color="light"
              style={{ marginBottom: "30px" }}
            >
              <h3>CHECK OUR PORTFOLIO</h3>
            </div>

            <div className="portfolio_filter">
              <ul>
                {FILTERS.map((f) => (
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
                {PROJECTS.map((p) => (
                  <li
                    key={p.id}
                    className={`filter-item ${p.category}${
                      isVisible(p.category) ? "" : " is-hidden"
                    }`}
                    style={{ transitionDelay: delayOf(p.id) }}
                  >
                    <div className="list_inner">
                      <div className="portfolio_main_photos">
                        <img
                          src={p.cover}
                          alt={p.title}
                          className="portfolio_main_photo_size"
                        />
                        <div className="overlay" />
                        <div className="gallery_badge" aria-hidden="true">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="13" height="13" rx="2" />
                            <path d="M8 21h11a2 2 0 0 0 2-2V8" />
                          </svg>
                          <span>View Gallery · {p.images.length} Photos</span>
                        </div>
                        <div className="details">
                          <h3>{CATEGORY_LABELS[p.category]}</h3>
                          <span>{p.title}</span>
                        </div>
                      </div>
                      <a
                        className="aali_tm_full_link"
                        onClick={() => setActiveProject(p)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Single-project modal: shows only the selected project's slider. */}
      <ModalBox
        close={() => setActiveProject(null)}
        isOpen={!!activeProject}
      >
        {activeProject && (
          <div className="service_popup_informations">
            <div className="main_title">
              <h3>{activeProject.title}</h3>
            </div>
            <Carousel key={activeProject.id} images={activeProject.images} />
          </div>
        )}
      </ModalBox>
    </>
  );
};

export default Portfolio;
