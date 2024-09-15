import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/profile.jpg";

const Header = () => {
  return (
    <section id="home">
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Derick Kibiwott</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={Me} alt="" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
