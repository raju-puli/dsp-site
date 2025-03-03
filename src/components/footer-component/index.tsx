import "./footer.css";

const Footer = () => {
    return (
        <footer id="footer" className="footer dark-background">
            <div className="container">
                <h3 className="sitename">Dyvaswarupi</h3>
                <p>Dyvaswarupi Association – Spreading Faith, Hope, and Divine Love!</p>
                <div className="social-links d-flex justify-content-center">
                    <a href=""><i className="bi bi-youtube"></i></a>
                    <a href=""><i className="bi bi-whatsapp"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                </div>
                <div className="container">
                    <div className="copyright">
                        <span>All Rights Reserved</span>
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