import { useState, useEffect } from "react";
import useScrollLogo from "../../utility/scrollEvents";
import "./hero.css";

const texts = [
    { text: "The Lord is my strength and my shield; my heart trusts in Him.", ref: "(Psalm 28:7)" },
    { text: "కర్తయే నా బలము, నా గోపురము; నా హృదయము ఆయనయందు విశ్వాసము కలిగియున్నది.", ref: "(కీర్తనల గ్రంథము 28:7)" },
    { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "(Proverbs 3:5)" },
    { text: "యెహోవాలో పూర్తిగా నమ్మకం ఉంచి, నీ స్వంత బుద్ధిని ఆధారపడి ఉండకు.", ref: "(సామెతలు 3:5)" }
];

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

    // Ensure index stays within valid bounds
    const currentIndex = Math.floor(new Date().getDate() % (texts.length / 2));

    // Get today's prayer timing safely
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
                            <h2>All Glory to the Lord</h2>
                            <i> <a href="/" className="prayer-time">Today is {today}, Prayer Time: {prayerTime}</a></i>
                            <p className={`fade-text ${fade ? "fade-in" : "fade-out"} d-flex flex-column`}>
                                <span>{isEnglish ? texts[currentIndex].text : texts[currentIndex + 1].text}</span>
                                <small>{isEnglish ? texts[currentIndex].ref : texts[currentIndex + 1].ref}</small>
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
                <ul className="nav">
                    {[
                        { id: "#hero", label: "Home", icon: "fa-home" },
                        { id: "#about", label: "About", icon: "fa-info-circle" },
                        { id: "#services", label: "Services", icon: "fa-briefcase" },
                        { id: "#multimedia", label: "Multimedia", icon: "fa-photo-video" },
                        { id: "#team", label: "Team", icon: "fa-users" },
                        { id: "#contact", label: "Contact", icon: "fa-phone" },
                    ].map(({ id, label, icon }) => (
                        <li key={id} className="nav-item">
                            <a href={id} className={`nav-link d-flex flex-column p-3 pb-0 ${activeNav === id ? "active" : ""}`}>
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
