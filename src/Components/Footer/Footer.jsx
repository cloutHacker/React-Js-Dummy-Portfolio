import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Derick
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
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https:facebook.com">
          <FaFacebookSquare />
        </a>
        <a href="https:instagram.com">
          <FaInstagramSquare />
        </a>
        <a href="https:x.com">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Derick Kibiwott. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
