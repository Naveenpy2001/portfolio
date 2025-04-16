"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../css/Nav.css";

import nkLogo from "../../../public/nklogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5"; 
import { BiMenuAltRight } from "react-icons/bi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Image src={nkLogo} alt="logo" className="nkLogo" title="Naveen Kumar" />
        </div>


  
        <div className={`navLinks ${isOpen ? "open" : ""}`}>
          <Link href="#home" className="link" scroll={false} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#skills" className="link" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link href="#projects" className="link" onClick={() => setIsOpen(false)}>
            Project
          </Link>
          <Link href="#contact" className="link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose className="icon close-icon" /> : <BiMenuAltRight className="icon" />}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
