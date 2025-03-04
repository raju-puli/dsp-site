import { useEffect, useState } from "react";
import "./header.css";
import useScrollLogo from "../../sections/utility/scrollEvents";

const Header = () => {
    const showLogo = useScrollLogo();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#hero");

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

                <nav id="navmenu" className="navmenu">
                    {isMenuOpen && <div className="back_cover active" onClick={handleMenuOption} />}
                    <ul className={isMenuOpen ? "open" : ""}>
                        {[
                            { id: "#hero", label: "Home" },
                            { id: "#about", label: "About" },
                            { id: "#services", label: "Services" },
                            { id: "#multimedia", label: "Multimedia" },
                            { id: "#team", label: "Team" },
                            { id: "#contact", label: "Contact" },
                        ].map(({ id, label }) => (
                            <li key={id}>
                                <a href={id} className={activeNav === id ? "active" : ""} onClick={handleNavClick}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`} onClick={handleMenuOption}></i>
                </nav>
            </div>
        </header>
    );
};

export default Header;
