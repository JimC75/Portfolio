import logo from "../assets/transparentlogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
// import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { useState, useEffect } from "react"

function Header() {
    const bars = <FontAwesomeIcon icon={faBars} />
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        function handleWindowWidth() {
            if (window.innerWidth >= 768) {
                setHidden(false);
            } else {
                setHidden(true);
            }
        }

        // Call the function initially
        handleWindowWidth();

        // Add event listener for resize
        window.addEventListener("resize", handleWindowWidth);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", handleWindowWidth);
        };
    }, []); // Empty dependency array to run effect only once after initial render



    return (
        <nav className={`top-nav-bar ${open ? 'open' : ""}`}>
            <div className="container">
                <img id="logoJMC" src={logo} alt="logo Jean-Marie Chateaux" />
                <button onClick={() => { setOpen(!open) }} className="burger">{bars}</button>
                <ul className={hidden && "hidden"}>
                    <li><Link to="skills" className="nav-link" smooth={true} duration={500} offset={10}>Mes Compétences</Link></li>
                    <li><Link to="projects" className="nav-link" smooth={true} duration={500} offset={-20}>Mes Projets</Link></li>
                    <li><Link to="contact" className="nav-link" smooth={true} duration={500} offset={0}>Me Contacter</Link></li>
                </ul>

                <div className="dropdown-content">
                    <ul className={hidden && "hidden"}>
                        <li><Link to="skills" className="nav-link" smooth={true} duration={500} offset={10}>Mes Compétences</Link></li>
                        <li><Link to="projects" className="nav-link" smooth={true} duration={500} offset={-20}>Mes Projets</Link></li>
                        <li><Link to="contact" className="nav-link" smooth={true} duration={500} offset={0}>Me Contacter</Link></li>

                        {/* Add more links for other sections as needed */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header