import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import logo from "../../media/girl.png";
const Footer = () => {
  return (
    <>
      <footer>
        <a href="#" className="footer__logo">
          <img src={logo} />
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/mariam.adel.92/" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/mariamadelm/" target="_blank">
            <FiInstagram />
          </a>
          <a href="https://twitter.com/MariamA57214131" target="_blank">
            <IoLogoTwitter />
          </a>
        </div>
        <div className="footer__copyright">
          <small>All rights reserved</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
