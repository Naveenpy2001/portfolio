'use client';

import { useState, useEffect, useRef } from 'react';

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const [isGrabbed, setIsGrabbed] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size for mobile or tablet
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024); // Hide on tablets and smaller screens
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    let lastTime = Date.now();

    const moveHandler = (e) => {
      if (isMobile) return;

      const now = Date.now();
      const deltaTime = now - lastTime;
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastPosition.x, 2) +
        Math.pow(e.clientY - lastPosition.y, 2)
      );

      const currentSpeed = distance / deltaTime;
      setSpeed(currentSpeed);

      lastTime = now;
      setLastPosition({ x: e.clientX, y: e.clientY });

      if (!isGrabbed || currentSpeed > 0.5) {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      }
    };

    const grabHandler = () => {
      if (isMobile) return;
      setIsGrabbed(true);
      if (cursorRef.current) {
        cursorRef.current.style.width = '15px';
        cursorRef.current.style.height = '15px';
        cursorRef.current.style.opacity = '0.6';
      }
    };

    const releaseHandler = () => {
      if (isMobile) return;
      setIsGrabbed(false);
      if (cursorRef.current) {
        cursorRef.current.style.width = '30px';
        cursorRef.current.style.height = '30px';
        cursorRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mousedown', grabHandler);
    window.addEventListener('mouseup', releaseHandler);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mousedown', grabHandler);
      window.removeEventListener('mouseup', releaseHandler);
    };
  }, [isGrabbed, lastPosition, isMobile]);

  if (isMobile) return null; // Hide component on mobile & tablets

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '2px solid #fff',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        pointerEvents: 'none',
        zIndex: 999,
        transition: 'transform 0.15s ease-out, width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
      }}
    />
  );
}
