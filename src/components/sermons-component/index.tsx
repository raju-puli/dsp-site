import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Theme from "../../theme/theam.tsx";

import "./sermons.css";


const Sermons = () => {
    const navigate = useNavigate();

    return (
        <div id="sermons">
            <header className="d-flex align-items-center justify-content-between p-3 bg-dark-gray text-white shadow">
                <button type="button" className="back-btn me-2" aria-label="Go Back" onClick={() => navigate(-1)}>
                    <i className="bi bi-arrow-left-circle fs-4"></i>
                    <span className="d-none d-md-flex"> Back </span>
                </button>
                <button type="button" className="btn p-0 theam-btn me-2">
                    <Theme />
                </button>

                <h3 className="position-relative d-flex align-items-center m-0 flex-grow-1 text-nowrap title-text">
                    <img src={logo} width="90" height="90" alt="Logo" className="me-2 logo" />
                    <span>Dyvaswarupi</span>
                </h3>


                {/* Search Bar: Visible in Large & Tab Screens */}
                <div className="d-none d-md-flex align-items-center me-2 position-relative">
                    <div className="input-group">
                        <input id="search-input-videos" type="text" className="form-control" placeholder="Search..." aria-label="Search" />

                        <span className="input-group-text">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>

                </div>


                {/* Search Bar: Mobile */}
                <div className="d-flex d-md-none">
                    <button type="button" className="back-btn me-2" >
                        <i className="bi bi-search fs-4"></i>
                    </button>
                </div>

                <button type="button" className="back-btn" aria-label="Filter">
                    <i className="bi bi-funnel fs-4"></i> <span className="d-none d-md-flex">Filter</span>
                </button>
            </header>
            <main id="background">
                Sermons
                {/* <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-content h-100">
                        <a href="assets/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery-app"
                            className="glightbox"><img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt="" /></a>
                        <div className="portfolio-info">
                            <h4><a href="portfolio-details.html" title="More Details">Branding 2</a></h4>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div className="portfolio-content h-100">
                        <a href="assets/img/portfolio/books-2.jpg" data-gallery="portfolio-gallery-app"
                            className="glightbox"><img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt="" /></a>
                        <div className="portfolio-info">
                            <h4><a href="portfolio-details.html" title="More Details">Books 2</a></h4>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div className="portfolio-content h-100">
                        <a href="assets/img/portfolio/app-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img
                            src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" /></a>
                        <div className="portfolio-info">
                            <h4><a href="portfolio-details.html" title="More Details">App 3</a></h4>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div className="portfolio-content h-100">
                        <a href="assets/img/portfolio/product-3.jpg" data-gallery="portfolio-gallery-app"
                            className="glightbox"><img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt="" /></a>
                        <div className="portfolio-info">
                            <h4><a href="portfolio-details.html" title="More Details">Product 3</a></h4>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-content h-100">
                        <a href="assets/img/portfolio/branding-3.jpg" data-gallery="portfolio-gallery-app"
                            className="glightbox"><img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt="" /></a>
                        <div className="portfolio-info">
                            <h4><a href="portfolio-details.html" title="More Details">Branding 3</a></h4>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div className="portfolio-content h-100">
                        <a href="assets/img/portfolio/books-3.jpg" data-gallery="portfolio-gallery-app"
                            className="glightbox"><img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt="" /></a>
                        <div className="portfolio-info">
                            <h4><a href="portfolio-details.html" title="More Details">Books 3</a></h4>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div> */}
            </main>
        </div>
    )
};

export default Sermons;