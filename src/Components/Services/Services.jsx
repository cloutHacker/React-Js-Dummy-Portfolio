import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./service.css";

const Services = () => {
  const numSkills = [5, 6, 5];
  return (
    <section id="services">
      <h5>What do I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {["UI/UX Design", "Web Development", "Content Creation"].map(
          (article, index) => (
            <article className="service" key={index}>
              <div className="service__head">
                <h3>{article}</h3>
              </div>

              <ul className="service__list">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>
                    <FaCheckCircle className="service__list-icon" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                  </li>
                ))}
              </ul>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
