"use client";
import { useState, useEffect } from "react";
import "../css/About.css";

import Image from "next/image";

import myIMage from "../../../public/download.jpg";
import SectionBox from "./NameComponent";

export default function AboutSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < 120) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <SectionBox title={"About"} description={"A little introduction about myself"} borderColor={"#3498db"} /> 
  
    <div id="about-section" className="about-section">
      <div className={`h1-container ${scrolled ? "scrolled" : ""}`}>
        <h1 className="top">About me</h1>
        <h1 className="bottom">About me</h1>
      </div>
      <div className={`profile-card ${scrolled ? "visible" : ""}`}>
        <div className="profile-content">
          {/* <Image src={myIMage} alt="Profile" className="profile-img" /> */}
          <Image src={myIMage} alt="Profile" className="profile-img" />
          <div className="profile-details">
            <h2>Naveen Kumar</h2>
            <p className="mySkills">Frontend Developer <span className="line">|</span> Backend Developer <span className="line">|</span> Full-Stack Developer</p>
           <ul>
           <li className="para">
            I'm a Frontend Developer with 1+ year of experience, skilled in building responsive and interactive web applications using React.js, Next.js.
            </li>
            <li className="para">Recently, I’ve expanded into backend development with Django REST Framework, creating full-stack solutions with clean API integration.
            </li>
            <li className="para">
            I enjoy learning new technologies, solving real-world problems through code, and turning ideas into functional, user-friendly products.
            </li>
           </ul>
            <p className="connectClass">
              Let's connect! :
              <a href="mailto:naveenpoolakuntla09@gmail.com" className="myMail">
                naveenpoolakuntla09@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
