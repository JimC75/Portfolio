import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function ProjectCard({
  name,
  cover,
  description,
  stack,
  live,
  code,
}) {

  return (
    <div className="project-card" data-aos="flip-left" data-aos-duration="1200">
      <img src={cover} alt={name} className="project-card-cover" />

      <div className="project-card-right-container">
        <div className="title-container">
          <h3 className="project-card-name">{name}</h3>
        </div>
        <div className="links-container">
          <a href={live} target="_blank" title="Visiter le site">
            <FaExternalLinkAlt className="link-icon" />
            Site
          </a>
          <a href={code} target="_blank" title="Voir le code">
            <FaCode className="link-icon" id="code-icon" />
            Code
          </a>
        </div>
      </div>
      <div className="project-card-bottom-container">
        <p>{description}</p>
        <ul>
          {stack.map((c) => (
            <li key={c}>{c}/</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

