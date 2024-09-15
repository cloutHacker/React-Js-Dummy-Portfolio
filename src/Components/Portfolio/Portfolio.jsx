import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
const Portfolio = () => {
  const data = [
    {
      image: IMG1,
      title: "Orion UI kit – design system for Figma",
    },
    {
      image: IMG2,
      title: "Responsive Phone Application for online users",
    },
    {
      image: IMG3,
      title: "Real-time Crypto currency dashboard with accessibility items",
    },
    {
      image: IMG4,
      title: "Admin Monitoring Panel for a wordpress website",
    },
    {
      image: IMG5,
      title: "Github online dashboard with realtime monitor dashboard",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ image, title }, id) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com" className="btn">
                Github
              </a>
              <a
                href="https://dribbble.com/Alien_pixels"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
