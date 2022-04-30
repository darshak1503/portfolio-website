import React from "react";
import "./About.css";
import ME from "../../Photo/about.jpg";
import { FaAward } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
export const About = () => {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Work</small>
            </article>
            <article className="about__card">
              <BiCodeAlt className="about__icon" />
              <h5>Codes</h5>
              <small>30000+ Lines Of Code </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            I'm an energetic person who enjoys a challenge and achieving personal
            goals. My present career aim is to work within the IT industry as
            web developer because I enjoy working with computers, I like making
            new skills and using my creativity to solve problems. The
            opportunity to learn new things is particularly attractive to me
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
