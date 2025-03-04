import { useState } from "react";
import "./header.css";
import useScrollLogo from "../../sections/utility/scrollEvents";

const Header = () => {
    const showLogo = useScrollLogo();
    const [activeNav, setActiveNav] = useState("#hero");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e: any) => {
        setActiveNav(e.target.getAttribute("href"));
        setIsMenuOpen(false);
    };

    const handleMenuOption = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <h1 className="sitename">
                            {showLogo ? (
                                <>
                                    <img src="assets/logo.png" alt="" data-aos="fade-in" /> <span className="association-name"> Dyvaswarupi </span>
                                </>
                            ) :
                                "Dyvaswarupi"
                            }
                        </h1>
                    </a>


                    <nav id="navmenu" className="navmenu" >
                        {/* < -------------------------------- START - Large screen nav options - START -------------------------------- > */}
                        <ul className={isMenuOpen ? "open" : ""}>
                            <li>
                                <a href="#hero" className={activeNav === "#hero" ? "active" : ""} onClick={handleNavClick} >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={handleNavClick} >
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className={activeNav === "#services" ? "active" : ""} onClick={handleNavClick} >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#multimedia" className={activeNav === "#multimedia" ? "active" : ""} onClick={handleNavClick} >
                                    Multimedia
                                </a>
                            </li>
                            <li>
                                <a href="#team" className={activeNav === "#team" ? "active" : ""} onClick={handleNavClick} >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    className={activeNav === "#contact" ? "active" : ""}
                                    onClick={handleNavClick}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <i className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`}
                            onClick={handleMenuOption}
                        ></i>
                        {/* < -------------------------------- END - Large screen nav options - END -------------------------------- > */}
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
