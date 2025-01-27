import React from "react";
import { FaGithub, FaInstagram, FaLightbulb, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-container">
       
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/kalash-chikara-bb8453237"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kalash1213"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/kalash_chikara_1213/?igsh=MWl1czNnbjA1c3pyNQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
          <FaInstagram />
        </a>
        <a
          href="https://x.com/KalashChikara"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
