import React from "react";
import "./nav.css";
import { CiHome } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { FaBookOpen } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { GrServices } from "react-icons/gr";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  let className = (val) => {
    if (activeNav === val) return "main__icon active";
    else return "main__icon";
  };
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => setActiveNav("#")}
            className={className("#")}
          >
            <Tooltip title="Go home" arrow>
              <IconButton>
                <CiHome />
              </IconButton>
            </Tooltip>
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActiveNav("a")}
            className={className("a")}
          >
            <Tooltip title="About the Author" arrow>
              <IconButton>
                <FcAbout />
              </IconButton>
            </Tooltip>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => setActiveNav("e")}
            className={className("e")}
          >
            <Tooltip title="My experience" arrow>
              <IconButton>
                <FaBookOpen />
              </IconButton>
            </Tooltip>
          </a>
        </li>

        <li>
          <a
            href="#services"
            onClick={() => setActiveNav("s")}
            className={className("s")}
          >
            <Tooltip title="Provided services" arrow>
              <IconButton>
                <GrServices />
              </IconButton>
            </Tooltip>
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => setActiveNav("p")}
            className={className("p")}
          >
            <Tooltip title="My portfolio" arrow>
              <IconButton>
                <FaFolderOpen />
              </IconButton>
            </Tooltip>
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            onClick={() => setActiveNav("t")}
            className={className("t")}
          >
            <Tooltip title="Testimonials" arrow>
              <IconButton>
                <FaQuoteLeft />
              </IconButton>
            </Tooltip>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setActiveNav("c")}
            className={className("c")}
          >
            <Tooltip title="Contact me" arrow>
              <IconButton>
                <FaEnvelope />
              </IconButton>
            </Tooltip>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
