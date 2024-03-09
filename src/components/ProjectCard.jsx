import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function ProjectCard({ name, cover, description, stack, live, code }) {

    return (
        <div className="project-card">
            <img src={cover} alt={name} className="project-card-cover" />
            <div className="project-card-right-container">
                <div className="title-countainer">
                    <h3 className="project-card-name">{name}</h3>
                </div>
                <div className="links-countainer">
                    <a href={live} target="_blank" title="Visiter le site"><FaExternalLinkAlt /></a>
                    <a href={code} target="_blank" title="Voir le code"><FaCode /></a>
                </div>
            </div>
            <div className="project-card-bottom-container">
                <p>{description}</p>
                <ul>
                    {stack.map(c =>
                        <li key={c}>{c}/</li>
                    )}
                </ul>
            </div>

        </div>
    )
}