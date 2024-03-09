import logo from "../assets/transparentlogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";
import { useState } from "react"

function Header() {
    const bars = <FontAwesomeIcon icon={faBars} />
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(true);
    function windowWidth() {
        if (window.innerWidth >= 400) {
            setHidden(false)
        } else {
            setHidden(true)
        }
    }
    window.onresize = windowWidth;


    return (
        <nav className={`top-nav-bar ${open ? 'open' : ""}`}>
            <img id="logoJMC" src={logo} alt="logo Jean-Marie Chateaux" />
            <button onClick={() => { setOpen(!open) }} className="burger">{bars}</button>
            <ul className={hidden && "hidden"}>
                <li>
                    <NavLink
                        to="#skills"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending navlinks" : isActive ? "active navlinks" : "navlinks"
                        }>
                        Compétences
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="#projects"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending navlinks" : isActive ? "active navlinks" : "navlinks"
                        }>
                        Projets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="#contact"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending navlinks" : isActive ? "active navlinks" : "navlinks"
                        }>
                        Me Contacter
                    </NavLink>
                </li>
            </ul>
            <div className="dropdown-content">
                <ul>
                    <li>
                        <NavLink
                            to="#skills"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending dropdown-links" : isActive ? "active dropdown-links" : "dropdown-links"
                            }>
                            Compétences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="#projects"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending dropdown-links" : isActive ? "active dropdown-links" : "dropdown-links"
                            }>
                            Projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="#contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending dropdown-links" : isActive ? "active dropdown-links" : "dropdown-links"
                            }>
                            Me Contacter
                        </NavLink>
                    </li>
                </ul>
            </div >
        </nav>
    )
}

export default Header