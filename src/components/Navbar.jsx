import React from "react";
import logo from "../assets/vs.jpg";
import { FaGithub, FaInstagram, FaLightbulb, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-container">
        {/* <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2"
            width={50}
            height={33}
            alt="Logo"
          ></img>
        </a> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vasu-sharma-a81208214/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vasu5x2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/vasu10sharma/?igsh=MWl1czNnbjA1c3pyNQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
          <FaInstagram />
        </a>
        <a
          href="https://x.com/vasu10s?s=21"
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
