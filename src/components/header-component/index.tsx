import { useEffect, useState } from "react";
import useScrollLogo from "../../sections/utility/scrollEvents";
import { NavigationLinks } from "../../sections/utility/main";
import { useNavigate } from "react-router-dom";

import "./header.css";

const Header = () => {
    const navigate = useNavigate();
    const showLogo = useScrollLogo();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#hero");

    const today = new Date();

    const handleNavClick = (e: any) => {
        // setActiveNav(e.target.getAttribute("href"));
        e.target.getAttribute("href")
        setIsMenuOpen(false);
    };

    const handleMenuOption = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let currentSection = "";
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = `#${section.id}`;
                }
            });

            if (currentSection) {
                setActiveNav(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                    <h1 className="sitename">
                        {showLogo ? (
                            <>
                                <img src="assets/logo.png" alt="" data-aos="fade-in" /> <span className="association-name"> Dyvaswarupi </span>
                            </>
                        ) : (
                            "Dyvaswarupi"
                        )}
                    </h1>
                </a>

                <nav id="navmenu" className="navmenu d-flex align-items-center">
                    {isMenuOpen && <div className="back_cover active" onClick={handleMenuOption} />}
                    <ul className={isMenuOpen ? "open" : ""}>
                        {NavigationLinks.map(({ id, label, icon }) => (
                            <li key={id}>
                                <a href={id} className={activeNav === id ? "active" : ""} onClick={handleNavClick}>
                                    <i className={`fas ${icon} menu-icons d-md-none`}></i> {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="position-relative bi bi-calendar fs-4 ms-4 me-4" onClick={() => navigate("/calendar")} ><span className="calendar-with-date">{(today).toString().split(" ")[2]}</span></i>

                    <i className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`} onClick={handleMenuOption}></i>

                </nav>
            </div>
        </header>
    );
};

export default Header;
