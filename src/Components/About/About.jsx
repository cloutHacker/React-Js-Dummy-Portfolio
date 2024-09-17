import React from "react";
import "./about.css";
import Me from "../../assets/profile.jpg";
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card loading-on-hover">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card loading-on-hover">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about__card loading-on-hover">
              <FaRegFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            corrupti odio mollitia explicabo magnam autem, corporis maiores
            delectus dolorum! Corrupti nulla quisquam quas quidem aspernatur
            quasi sint, ex id laborum.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
