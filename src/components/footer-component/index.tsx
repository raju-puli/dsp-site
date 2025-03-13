import { SocialMediaLinks } from "../../sections/utility/main";

import "./footer.css";

const Footer = () => {
    return (
        <footer id="footer" className="footer dark-background d-none d-md-flex pb-4">
            <div className="container">
                <h3 className="sitename">DYVASWARUPI</h3>
                <p>Dyvaswarupi Association – Spreading Faith, Hope, and Divine Love!</p>
                <div className="social-links">
                    <div className="container flex-column">
                        <i>Follow Us On :</i>
                        <div className="social-links d-flex justify-content-center mt-2">
                            {SocialMediaLinks.map((link) => (
                                <a key={link.id} href={link.url}><i className={`bi ${link.icon}`}></i></a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        {/* <span>All Rights Reserved</span> */}
                    </div>
                    <div className="credits">
                        Designed by <a href="">DSP Youth</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;