import { useEffect, useState } from "react";
import { scroll_, stickyNav } from "../utilits";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { BsFolder2Open } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import Link from "next/dist/client/link";
import link from "next/link";
import { useRouter } from "next/dist/client/router";



const Header = ({ dark }) => {
  useEffect(() => {
    // window.addEventListener("scroll", stickyNav);
    // window.addEventListener("scroll", scroll_);
  });
  const router = useRouter()
  console.log(router ,"router");

  const [activeLink, setActiveLink] = useState("#home");

  const handleClick = (link) => {
    setActiveLink(link);
  };
  
  return (
    <div className="aali_tm_header">
      <div className="container">
        <div className="inner">
          {dark ? (
            <div className="logo">
              <a href="#">
                <img src="img/logo/logo.png" alt="" />
              </a>
            </div>
          ) : (
            <div className="logo">
              <a className="light" href="#">
                <img src="img/logo/logo.png" alt="aali image" />
              </a>
              <a className="dark" href="#">
                <img src="img/logo/dark.png" alt="aali image" />
              </a>
            </div>
          )}

        </div>
      </div>
          <div className="menu">
            <ul className="anchor_nav">
            <li
            >
              <a href="#home"  style={{color:activeLink === "#home" ? "#FEC101" : "white"}}
              onClick={() => handleClick("#home")}><IoHomeOutline /></a>
            </li>
            <li
            >
              <a href="#about"  style={{color:activeLink === "#about" ? "#FEC101" : "white"}}
              onClick={() => handleClick("#about")}><MdGroups /></a>
            </li>
            <li
            >
              <a href="#portfolio" style={{color:activeLink === "#portfolio" ? "#FEC101" : "white"}}
              onClick={() => handleClick("#portfolio")}><BsFolder2Open /></a>
            </li>
            <li
            >
              <a href="#service"  style={{color:activeLink === "#service" ? "#FEC101" : "white"}}
              onClick={() => handleClick("#service")}><MdMiscellaneousServices /></a>
            </li>
              {/* <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li> */}
              <li
              >
                <a href="#contact"  style={{color:activeLink === "#contact" ? "#FEC101" : "white"}}
               onClick={() => handleClick("#contact")}><LuContact/></a>
              </li>
            </ul>
          </div>
    </div>
  );
};

export default Header;
