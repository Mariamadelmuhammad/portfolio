import React from "react";
import "./Portfolio.css";

import img1 from "../../media/img1.png";
import img2 from "../../media/img2.jpeg";
import img3 from "../../media/movie1.png";
import img4 from "../../media/figma.png";
import img5 from "../../media/react-portfolio.png";
import img6 from "../../media/booking.png";
export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: img1,
      title: "Bootstrap",
      github:
        "https://github.com/Mariamadelmuhammad/Bootstrap/tree/main/bootstrap-lab",
    },
    {
      id: 2,
      image: img2,
      title: "Graduation Project(EvoCare)",
      github: "https://github.com/Mariamadelmuhammad/Graduation-Project-ITI",
    },
    {
      id: 3,
      image: img3,
      title: "React.js (MovieApp)",
      github: "https://github.com/Mariamadelmuhammad/React/tree/main/Day%203",
    },
    {
      id: 4,
      image: img4,
      title: "UI UX (Figma)",
      github: "https://github.com/Mariamadelmuhammad/UI-UX",
    },
    {
      id: 5,
      image: img5,
      title: "React.js(potfolio)",
      github: "https://github.com/Mariamadelmuhammad/React/tree/main/Day%201",
    },
    {
      id: 6,
      image: img6,
      title: "Resort Booking",
      github: "https://github.com",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3 id="title">{title}</h3>
              <div className="portfolio__item-cta text-center ">
                <a
                  type="button"
                  className="btn btn-primary"
                  target="_blank"
                  href={github}
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
