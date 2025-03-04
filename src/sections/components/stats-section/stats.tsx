import { useEffect, useState, useRef } from "react";

const Stats = () => {
    const [counts, setCounts] = useState({ believers: 0, pastors: 0, churches: 0 });
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const animateCounter = (target: number, key: keyof typeof counts) => {
            let start = 0;
            const duration = 2000;
            const step = Math.max(1, Math.floor(target / (duration / 10)));

            const interval = setInterval(() => {
                start += step;
                setCounts((prev) => ({ ...prev, [key]: Math.min(start, target) }));

                if (start >= target) clearInterval(interval);
            }, 10);
        };

        animateCounter(32000, "believers");
        animateCounter(1600, "pastors");
        animateCounter(1600, "churches");
    }, [isVisible]);

    return (
        <section id="stats" className="stats section light-background" ref={sectionRef}>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-4">
                        <div className="stats-item text-center w-100 h-100">
                            <span className="purecounter">{counts.believers.toLocaleString()}</span>
                            <p>Believers</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="stats-item text-center w-100 h-100">
                            <span className="purecounter">{counts.pastors.toLocaleString()}</span>
                            <p>Pastors</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="stats-item text-center w-100 h-100">
                            <span className="purecounter">{counts.churches.toLocaleString()}</span>
                            <p>Churches</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
