import { FaHtml5 } from "react-icons/fa6";
import { FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export default function Skills() {
    return (
        <section className="skills">
            <h2>Mes Compétences</h2>
            <div className="logos">
                <FaHtml5 />
                <FaSass />
                <IoLogoJavascript />
                <FaReact />
                <FaNodeJs />
                <FaBootstrap />
                <SiGithub />

            </div>
            {/* <FontAwesomeIcon icon="fa-brands fa-html5" /> */}
        </section>
    )
}