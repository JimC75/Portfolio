import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="social-links-container">
                <a href="https://www.linkedin.com/in/jean-marie-chateaux-58a8a3297/" target="_blank" className="social-links">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/JimC75" target="_blank" className="social-links">
                    <FaGithub />
                </a>
            </div>
            <p><span className="special-character">©</span> 2024 • made by Jean-Marie CHATEAUX.</p>
            <p>Web Developer from France</p>
        </footer>
    )
}