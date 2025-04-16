"use client";

import { useState, useEffect } from "react";
import HeroSec from "./components/HeroSec";
import AboutSection from "./components/AboutMe";
import "./css/Home.css";
import SkillsSet from "./components/SkillsSet";
import Timeline from "./components/TimeLine";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import ScrollProgressBar from "./components/ScrillBar";
import LoadingScreen from "./components/Loading";
import CursorFollower from "./components/CursorFollower";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the loading animation to finish (based on its timing)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Matches total animation duration

    return () => clearTimeout(timer);
  }, []);
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      <NavBar />
      <ScrollProgressBar />
      <CursorFollower />
      <section id="home">
        <HeroSec />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <ScrollToTop />
      <section>
        <SkillsSet />
      </section>
      <section>
        <Timeline />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section>
        <Gallery />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      <Footer />
    </>
  );
}
