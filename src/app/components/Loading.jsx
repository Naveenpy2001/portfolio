"use client";
import "../css/Loading.css";

import { useState, useEffect } from "react";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";

const languages = ["Welcome", "Բարի գալուստ", "स्वागत", "ようこそ", "ಸ್ವಾಗತ", "Bienvenido", "Willkommen","స్వాగతం"]; 
// English, Telugu, Hindi, Japanese, Kannada, Spanish, German



const LoadingScreen = () => {
  const [index, setIndex] = useState(0);
  const [isSplitting, setIsSplitting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (index < languages.length - 1) {
      const timer = setTimeout(() => setIndex((prev) => prev + 1), 250); // Show each language for 0.3s
      return () => clearTimeout(timer);
    } else {
      // Start split effect after last word
      setTimeout(() => setIsSplitting(true), 500);
      setTimeout(() => setIsHidden(true), 700);
    }
  }, [index]);

  if (isHidden) return null; // Remove component after animation ends

  return (
    <div className={`loading-screen ${isSplitting ? "split-bg" : ""}`}>
      {!isSplitting && (
        <div className="rotating-text-wrapper">
          <h1 key={index} className="rotating-text-lang">{languages[index]}</h1>
        </div>
      )}
    </div>
  );
};




export default LoadingScreen;
