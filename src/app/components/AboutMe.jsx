"use client";
import { useState, useEffect } from "react";
import "../css/About.css";

import Image from "next/image";

import myIMage from "../../../public/myImage.jpg";
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
    <SectionBox title={"About Me"} description={"A little introduction about myself"} borderColor={"#3498db"} /> 
  
    <div id="about-section" className="about-section">
      <div className={`h1-container ${scrolled ? "scrolled" : ""}`}>
        <h1 className="top">About Me</h1>
        <h1 className="bottom">About Me</h1>
      </div>
      <div className={`profile-card ${scrolled ? "visible" : ""}`}>
        <div className="profile-content">
          <Image src={myIMage} alt="Profile" className="profile-img" />
          <div className="profile-details">
            <h2>Naveen Kumar</h2>
            <p className="mySkills">Full-Stack Developer | Scalable Systems</p>
            <p>
              I specialize in building modern, user-friendly web applications
              with a focus on performance and design. With expertise in both
              frontend (React, Next.js, Tailwind CSS) and backend (Django, DRF),
              I create seamless digital experiences from start to finish.
            </p>
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
