import { useState, useEffect } from "react";
import useScrollLogo from "../../utility/scrollEvents";
import DailyBibleVerses from "../../utility/dailyBibleVerses";
import { PrayerTimings, NavigationLinks, SocialMediaLinks } from "../../utility/main";

import "./hero.css";

const Hero = () => {
    const showLogo = useScrollLogo();
    const [fade, setFade] = useState(true);
    const [activeNav, setActiveNav] = useState("#hero");
    const [isEnglish, setIsEnglish] = useState(true);

    const currentIndex = Math.floor(new Date().getDate() % (DailyBibleVerses.length / 2));

    const today = new Date().toLocaleDateString("en-US", { weekday: "long" }) as keyof typeof PrayerTimings;
    const prayerTime = PrayerTimings[today] || "No scheduled prayers today";

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIsEnglish((prev) => !prev);
                setFade(true);
            }, 500);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = `#${section.id}`;
                }
            });

            if (currentSection) setActiveNav(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section
                id="hero"
                className="hero section dark-background d-flex justify-content-center align-items-center"
            >
                <img src="/assets/img/hero-bg.jpg" alt="Hero background" data-aos="fade-in" />

                <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="row justify-content-center flex-column align-items-center">
                        <img src="/assets/logo.png" className="img-fluid" alt="Website Logo" />
                        <div className="col-lg-8">
                            <h2 className="text_shadow hero-title-bg">ALL GLORY TO THE LORD</h2>
                            <i>
                                <a className="prayer-time">
                                    Today is {today}, Prayer Time: {prayerTime}
                                </a>
                            </i>
                            <p className={`fade-text ${fade ? "fade-in" : "fade-out"} d-flex flex-column`}>
                                <span >
                                    {isEnglish
                                        ? DailyBibleVerses[currentIndex].message[0].text
                                        : DailyBibleVerses[currentIndex].message[1].text}
                                </span>
                                <small>
                                    {isEnglish
                                        ? DailyBibleVerses[currentIndex].message[0].ref
                                        : DailyBibleVerses[currentIndex].message[1].ref}
                                </small>
                            </p>
                            <a href="#about" className="btn-get-started d-none d-md-inline-block">Get Started</a>
                            <div className="footer p-0 d-md-none pt-4" style={{ background: "none" }}>
                                <div className="container flex-column">
                                    <i className="mb-2">Follow Us On :</i>
                                    <div className="social-links d-flex justify-content-center mt-2">
                                        {SocialMediaLinks.map((link) => (
                                            <a key={link.id} href={link.url}><i className={`bi ${link.icon}`}></i></a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {!showLogo && (
                    <div className="arrow-container">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <a href="#about" className="text">Scroll down</a>
                    </div>
                )}
            </section>

            <div className={`footer d-flex justify-content-around align-items-center bg-secondary text-white p-0 fixed-bottom mobile-footer-box d-md-none ${showLogo ? "visible-footer" : ""}`}>
                <ul className="nav flex-nowrap">
                    {NavigationLinks.map(({ id, label, icon }) => (
                        <li key={id} className="nav-item pb-2">
                            <a href={id} className={`d-flex flex-column p-3 pb-0 ${activeNav === id ? "active" : ""}`}>
                                <i className={`fas ${icon}`}></i> {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Hero;
