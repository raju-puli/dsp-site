import { useState, useEffect } from "react";

const useScrollLogo = () => {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => {
            setShowLogo(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    return showLogo;
};

export default useScrollLogo;
