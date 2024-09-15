import React from "react";
import "./experience.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Experience = () => {
  const frontEndSkills = [
    "Html",
    "CSS",
    "Javascript",
    "Bootstrap",
    "Tailwind",
    "Angular",
  ];
  const icon = [
    <FaHtml5 className="experience__icons" />,
    <FaCss3 className="experience__icons" />,
    <IoLogoJavascript className="experience__icons" />,
    <FaBootstrap className="experience__icons" />,
    <RiTailwindCssFill className="experience__icons" />,
    <FaAngular className="experience__icons" />,
  ];
  const experience = [
    "Experienced",
    "Experienced",
    "Intermediate",
    "Intermediate",
    "Experienced",
    "Beginner",
  ];

  // End of frontend skills section
  const backEndSkills = ["Node Js", "MongoDB", "PHP", "Python", "MySQL"];
  const backEndIcons = [
    <FaNodeJs className="experience__icons" />,
    <DiMongodb className="experience__icons" />,
    <FaPhp className="experience__icons" />,
    <FaPython className="experience__icons" />,
    <SiMysql className="experience__icons" />,
  ];

  return (
    <section id="experience">
      <h5>What experience do I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((skill, i) => (
              <article className="experience__details" key={i}>
                <div>
                  {icon[i]}
                  <h4>{skill}</h4>
                  <small className="text-light">{experience[i]}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {/* Mapping out all the elements to display in a single card */}
            {backEndSkills.map((skill, i) => (
              <article className="experience__details" key={i}>
                <div>
                  {backEndIcons[i]}
                  <h4>{skill}</h4>
                  <small className="text-light">{experience[i]}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
