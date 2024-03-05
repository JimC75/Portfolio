import { NavLink } from "react-router-dom";

export default function ProjectCard({ name, cover, description, stack, live, code }) {
    return (
        <div className="project-card">
            <h3 className="project-card-name">{name}</h3>
            <img src={cover} alt={name} className="project-card-cover" />
            <p>{description}</p>
            <ul>
                {stack.map(c =>
                    <li key={c}>{c}</li>
                )}
            </ul>
            <a href={live} target="_blank">Version Live</a> <br />
            <a href={code} target="_blank">Code</a>
        </div>
    )
}