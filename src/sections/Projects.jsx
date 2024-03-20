import ProjectCard from "../components/ProjectCard";
import { useState, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Projects() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(d => setData(d))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="animation" >
            <section className="projects" id="projects">
                <h2 className="projects-title">Mes Projets</h2>
                {
                    data ? (
                        data.map(p =>
                            < ProjectCard name={p.name} cover={p.picture} description={p.description} stack={p.stack} live={p.liveLink} code={p.codeLink} key={p.id} />
                        )
                    ) : (
                        <p>Chargement ...</p>
                    )
                }
            </section>

        </div>
    )
}