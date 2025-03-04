import { useState, useEffect } from "react";
import "./hero.css";
import useScrollLogo from "../../utility/scrollEvents";

const texts = [
    { text: "The Lord is my strength and my shield; my heart trusts in Him.", ref: "(Psalm 28:7)" },
    { text: "కర్తయే నా బలము, నా గోపురము; నా హృదయము ఆయనయందు విశ్వాసము కలిగియున్నది.", ref: "(కీర్తనల గ్రంథము 28:7)" },
    { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "(Proverbs 3:5)" },
    { text: "యెహోవాలో పూర్తిగా నమ్మకం ఉంచి, నీ స్వంత బుద్ధిని ఆధారపడి ఉండకు.", ref: "(సామెతలు 3:5)" }
];

const Hero = () => {
    const showLogo = useScrollLogo();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFade(true);
            }, 500);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section id="hero" className="hero section dark-background">
                <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

                <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="row justify-content-center flex-column align-items-center">
                        <img src="assets/logo.png" className="img-fluid" alt="" />
                        <div className="col-lg-8">
                            <h2>All Glory to the Lord
                                {/* 🙏🏽 */}
                            </h2>
                            <p className={`fade-text ${fade ? "fade-in" : "fade-out"} d-flex flex-column`}>
                                <span>{texts[currentIndex].text}</span>
                                <small>{texts[currentIndex].ref}</small>
                            </p>
                            <a href="#about" className="btn-get-started">Get Started</a>
                        </div>
                    </div>
                </div>
                {!showLogo &&
                    <div className="arrow-container">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <a href="#about" className="text">Scroll down</a>
                    </div>
                }
            </section>

            <div className={`footer d-flex justify-content-around align-items-center bg-secondary text-white p-3 fixed-bottom mobile-footer-box d-md-none ${showLogo ? "visible-footer" : ""}`}>
                <a href="#"><i className="fas fa-home"></i> Home</a>
                <a href="#about"><i className="fas fa-info-circle"></i> About</a>
                <a href="#services"><i className="fas fa-briefcase"></i> Services</a>
                <a href="#multimedia"><i className="fas fa-photo-video"></i> MultiMedia</a>
                <a href="#team"><i className="fas fa-users"></i> Team</a>
                <a href="#contact"><i className="fas fa-phone"></i> Contact</a>
            </div>
        </>
    );
};

export default Hero;
