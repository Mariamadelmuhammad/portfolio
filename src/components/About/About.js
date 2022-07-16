import React from "react";
import "./About.css";
import ME from "../../media/me1.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me " />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Assignments</h5>
              <small>100+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Projects </small>
            </article>
          </div>
          <p>
            Hi there...I am Mariam a PASSIONATE learner, Welcome to my first
            Portfolio to do myself. I graduated from faculty of Financial and
            Management Science class 2021. specialized in Business
            Administration, Human Resources department .I loved my department
            where i started to know how to communicate with people and how to
            understand their minds set also, Appraising them. In senior year, i
            was pretty interested in combining the Business Information with
            Technology and it started when my graduation projects were about
            technology. I had to initiate an e-commerce website where i started
            to know more regarding programming languages such as, HTML, CSS and
            JavaScript. I was obsessed with applying my business ideas using
            Technology .Also, I was a team leader in my graduation project which
            i worked in ERP Systems (ERP.next). I was a website and System
            manager and it ended up with an Excellent grade. I applied to
            Information Technology Institute(ITI) ,where i developed my skills
            in variety of different topics in programming, I specialized in full
            stack web Development using Python. With a daily assignments and
            many projects and real clients, I can say It's just the beginning of
            more upcoming amazing work.
          </p>
          <a href="#contact" className="btn btn-primary " id="btn__contact">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
