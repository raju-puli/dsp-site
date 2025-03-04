import { useState, useEffect } from "react";
import useScrollLogo from "../../utility/scrollEvents";
import DailyBibleVerses from "../../utility/dailyBibleVerses";
import { NavigationLinks } from "../../utility/main";

import "./hero.css";

const prayerTimings: Record<string, string> = {
    Sunday: "10:30 AM - 1:00 PM",
    Tuesday: "11:00 AM - 2:00 PM",
    Thursday: "3:00 PM - 5:00 PM",
    Friday: "5:00 PM - 7:00 PM",
    Saturday: "6:00 PM - 9:00 PM"
};

const Hero = () => {
    const showLogo = useScrollLogo();
    const [fade, setFade] = useState(true);
    const [activeNav, setActiveNav] = useState("#hero");
    const [isEnglish, setIsEnglish] = useState(true);

    const currentIndex = Math.floor(new Date().getDate() % (DailyBibleVerses.length / 2));

    const today = new Date().toLocaleDateString("en-US", { weekday: "long" }) as keyof typeof prayerTimings;
    const prayerTime = prayerTimings[today] || "No scheduled prayers today";

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
            <section id="hero" className="hero section dark-background">
                <img src="/assets/img/hero-bg.jpg" alt="Hero background" data-aos="fade-in" />

                <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="row justify-content-center flex-column align-items-center">
                        <img src="/assets/logo.png" className="img-fluid" alt="Website Logo" />
                        <div className="col-lg-8">
                            <h2>ALL GLORY TO THE LORD</h2>
                            <i> <a href="/" className="prayer-time">Today is {today}, Prayer Time: {prayerTime}</a></i>
                            <p className={`fade-text ${fade ? "fade-in" : "fade-out"} d-flex flex-column`}>
                                <span>{isEnglish ? DailyBibleVerses[currentIndex - 1].text : DailyBibleVerses[currentIndex].text}</span>
                                <small>{isEnglish ? DailyBibleVerses[currentIndex - 1].ref : DailyBibleVerses[currentIndex].ref}</small>
                            </p>
                            <a href="#about" className="btn-get-started">Get Started</a>
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
            </section >

            <div className={`footer d-flex justify-content-around align-items-center bg-secondary text-white p-0 fixed-bottom mobile-footer-box d-md-none ${showLogo ? "visible-footer" : ""}`}>
                <ul className="nav flex-nowrap">
                    {NavigationLinks.map(({ id, label, icon }) => (
                        <li key={id} className="nav-item">
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
