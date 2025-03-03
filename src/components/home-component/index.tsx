import About from "../../sections/components/about-section/about";
import Action from "../../sections/components/action-section/action";
import Contact from "../../sections/components/contact-section/contact";
import Hero from "../../sections/components/hero-section/hero";
import Multimedia from "../../sections/components/multimedia-section/multimedia";
// import Pricing from "../../sections/components/pricing-section/pricing";
import Services from "../../sections/components/services-section/services";
import Stats from "../../sections/components/stats-section/stats";
import Team from "../../sections/components/team-section/texm";
import "./home.css";

const Home = () => {
    return (
        <main className="main">

            {/* <!-- Hero Section --> */}
            <Hero />
            {/* <!-- /Hero Section --> */}

            {/* <!-- About Section --> */}
            <About />
            {/* <!-- /About Section --> */}

            {/* <!-- Stats Section --> */}
            <Stats />
            {/* <!-- /Stats Section --> */}

            {/* <!-- Services Section --> */}
            <Services />
            {/* <!-- /Services Section --> */}

            {/* <!-- Call To Action Section --> */}
            <Action />
            {/* <!-- /Call To Action Section --> */}

            {/* <!-- Multimedia Section --> */}
            <Multimedia />
            {/* <!-- /Multimedia Section --> */}

            {/* <!-- Pricing Section --> */}
            {/* <Pricing /> */}
            {/* <!-- /Pricing Section --> */}

            {/* <!-- Team Section --> */}
            <Team />
            {/* <!-- /Team Section --> */}

            {/* <!-- Contact Section --> */}
            <Contact />
            {/* <!-- /Contact Section --> */}

        </main >
    )
};
export default Home;