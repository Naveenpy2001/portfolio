"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import IntroImg from "../../../public/introLogo.jpg";
import "../css/Home.css";
import { FaFileDownload } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGithub, SiMinutemailer } from "react-icons/si";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const HeroSec = () => {
  const [hoverEffect, setHoverEffect] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const width = target.clientWidth;
    const height = target.clientHeight;
    const moveX = ((offsetX - width / 2) / width) * 30;
    const moveY = ((offsetY - height / 2) / height) * 30;
    setHoverEffect({ x: moveX, y: moveY });
  };

  const resetHover = () => {
    setHoverEffect({ x: 0, y: 0 });
  };

  // left side typing animation

  const [role, setRole] = useState("");
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingTimeout = setTimeout(
      () => {
        const currentRole = roles[roleIndex];

        if (isTyping) {
          if (charIndex < currentRole.length) {
            setRole(currentRole.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsTyping(false), 1000); // Pause at end
          }
        } else {
          if (charIndex > 0) {
            setRole(currentRole.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsTyping(true);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isTyping ? 100 : 50
    );

    return () => clearTimeout(typingTimeout);
  }, [role, roleIndex, charIndex, isTyping]);

  return (
    <>

      <div className="hero-container">
        {/* scroll down */}
        <div className="side-scrolldown">
          <div className="side-chevrons">
            <div className="side-chevrondown"></div>
            <div className="side-chevrondown"></div>
          </div>
        </div>

        <div className="side-social-sidebar">
         <a href="" target="_blank"> <FaTwitter className="side-social-icon side-twitter" /></a>
          <FaInstagram className="side-social-icon side-instagram" />
          <FaFacebook className="side-social-icon side-facebook" />
          <div className="side-social-line"></div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/naveen-kumar-aaa985252/"
            target="_blank"
          >
            <BsLinkedin className="iconLinkden" />
          </a>
          <a href="https://wa.me/919676238249" target="_blank">
            <FaWhatsapp className="iconGit side-whatsapp" />
          </a>
          <a href="https://github.com/Naveenpy2001" target="_blank">
            <SiGithub className="iconGit gitSize" />
          </a>
        </div>

        <div className="hero-content">
          {/* Left Content - Text */}
          <div className="hero-text">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="intro-left"
            >
              <div className="intro-greeting">Hello I'm</div>
              <h1 className="intro-name">
                <span className="intro-highlight">Naveen Poolakuntla</span>
              </h1>

              <div className="intro-role-container">
                <div className="intro-role-text">
                  {role}
                  <span className="intro-role-cursor">|</span>
                </div>
              </div>

              <p className="intro-description fade-item">
                I design and develop high-performance web applications with
                modern technologies. Passionate about creating seamless user
                experiences with clean code and scalable architecture.
              </p>

              <div className="intro-buttons">
                <motion.a
                  href="#work"
                  className="intro-button-primary"
                  whileHover={{
                    y: -3,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                    transition: '.2s linear'
                  }}
                >
                  View Work 
                </motion.a>
                <motion.a
                  href="mailto:naveenpoolakuntla09@gmail.com"
                  className="intro-button-secondary"
                  whileHover={{
                    y: -3,
                    backgroundColor: "white",
                    color: "#182848",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div
            className="hero-image page-content"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetHover}
          >
            <Image
              src={IntroImg}
              alt="Naveen Poolakuntla"
              width={350}
              height={350}
              quality={100}
              priority
              style={{
                transform: `translate(${hoverEffect.x}px, ${hoverEffect.y}px)`,
                transition: "transform 0.2s ease-out",
                borderRadius: "5px",
                // boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSec;
