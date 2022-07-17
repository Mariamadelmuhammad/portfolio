import React from "react";
import "./Header.css";
import CV from "../../CV/myCV.docx";
import idea from "../../media/social-media.gif";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { SiUpwork } from "react-icons/si";
import { useState, useEffect } from "react";
import { TbArrowBigRightLines } from "react-icons/tb";

const Header = () => {
  const superpower = "Hello...I am Mariam";
  const [typedSuperPower, setTypedSuperPower] = useState("");
  useEffect(() => {
    const nextTypedSuperPower = superpower.slice(0, typedSuperPower.length + 1);
    if (nextTypedSuperPower === typedSuperPower) return;
    const timeout = setTimeout(() => {
      setTypedSuperPower(superpower.slice(0, typedSuperPower.length + 1));
    }, 300);
    return () => clearTimeout(timeout);
  }, [typedSuperPower]);
  return (
    <header>
      <div className="container header__container">
        <h5>
          <div className="text-primary-400 blinking-cursor" id="hello">
            {typedSuperPower}
          </div>
        </h5>

        <h5 className="text-light">Fullstack Developer</h5>

        <div className="cta">
          <a
            href={CV}
            download
            className="btn btn-outline-primary "
            id="buttons"
          >
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary" id="buttons2">
            Contact
          </a>
        </div>
        <div className="me">
          <img src={idea} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down <TbArrowBigRightLines />
        </a>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/mariamadelmuhammad/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/Mariamadelmuhammad" target="_blank">
            <BsGithub />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~010da3ecd7b3415001"
            target="_blank"
          >
            <SiUpwork />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
