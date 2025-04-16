'use client'
import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  // console.log(scrollPercentage)

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div style={{ 
      position: "fixed", 
      top: "0", 
      left: "0", 
      width: "100%", 
      height: "4px", 
      backgroundColor: "#e6e6e65f", 
      zIndex: "1000" ,
      backdropFilter:'blur(10px)'
    }}>
      <div 
        style={{ 
          height: "5px", 
          backgroundColor: "red", 
          width: `${scrollPercentage}%`, 
          transition: "width 0.1s ease-in-out" 
        }} 
      />
    </div>
  );
};

export default ScrollProgressBar;
