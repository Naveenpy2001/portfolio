// components/WelcomeLoader.jsx
"use client";
import "../css/welcome.css";
import { useEffect, useState, useRef } from "react";

const WelcomeLoader = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState("showing-text");
  const loaderRef = useRef(null);

  const welcomeWords = [
    "Welcome", // English
    "स्वागत हे", // Hindi
    "స్వాగతం", // Telugu
    "Bienvenido", // Spanish
    "Bienvenue", // French
    "Willkommen", // German
    "Benvenuto", // Italian
    "ようこそ", // Japanese
    "欢迎", // Chinese
  ];

  useEffect(() => {
    const timers = [];

    // Show each word for 150ms (faster appearance)
    if (animationPhase === "showing-text") {
      timers.push(
        setTimeout(() => {
          setCurrentIndex((prev) => {
            if (prev >= welcomeWords.length - 1) {
              setAnimationPhase("slicing");
              return prev;
            }
            return prev + 1;
          });
        }, 150)
      );
    }

    // After slicing, wait 500ms then fade out
    else if (animationPhase === "slicing") {
      timers.push(
        setTimeout(() => {
          setAnimationPhase("fade-out");
        }, 500)
      );
    }

    // After fade out, complete
    else if (animationPhase === "fade-out") {
      timers.push(
        setTimeout(() => {
          onComplete();
        }, 500)
      );
    }

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [animationPhase]);

  return (
    <div
      ref={loaderRef}
      className={`
        welcome-loader 
        ${animationPhase === "slicing" ? "slicing" : ""}
        ${animationPhase === "fade-out" ? "fade-out" : ""}
      `}
    >
      {/* Black background that will split */}
      <div className="background-slice top-slice"></div>
      <div className="background-slice bottom-slice"></div>

      {/* Words container */}
      <div className="words-container">
        {welcomeWords.map((word, index) => (
          <div
            key={index}
            className={`welcome-word ${index <= currentIndex ? "visible" : ""}`}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeLoader;
