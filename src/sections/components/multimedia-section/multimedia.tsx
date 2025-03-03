import { useNavigate } from "react-router-dom";

import "./multimedia.css";

const Multimedia = () => {
    const navigate = useNavigate();
    return (
        <section id="multimedia" className="portfolio section">

            <div className="container section-title" data-aos="fade-up">
                <h2>Multimedia</h2>
                <p> Experience faith through music, teachings, and real-life stories</p>
            </div>

            <div className="container">

                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 portfolio-item isotope-item filter-app">
                            <div className="portfolio-content">
                                <div className="card mb-4 box-shadow" onClick={() => navigate("/songs")}>
                                    <div className="card-deck mb-1 text-center">
                                        <div className="card-body">
                                            <i className="bi bi-music-note fs-1 com-icon"></i>
                                            <h4 className="card-title pricing-card-title">Songs</h4>
                                            <p className="mt-3 mb-4">Sing or listen to our uplifting worship and gospel songs. 🎶</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 portfolio-item isotope-item filter-app">
                            <div className="portfolio-content">
                                <div className="card mb-4 box-shadow">
                                    <div className="card-deck mb-1 text-center">
                                        <div className="card-body">
                                            <i className="bi bi-calendar-week fs-1 com-icon"></i>
                                            <h4 className="card-title pricing-card-title">Events</h4>
                                            <p className="mt-3 mb-4">Stay connected with past and upcoming spiritual gatherings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 portfolio-item isotope-item filter-app">
                            <div className="portfolio-content">
                                <div className="card mb-4 box-shadow">
                                    <div className="card-deck mb-1 text-center">
                                        <div className="card-body">
                                            <i className="bi bi-mic fs-1 com-icon"></i>
                                            <h4 className="card-title pricing-card-title">Sermons & Teachings</h4>
                                            <p className="mt-3 mb-4">Gain wisdom through powerful sermons and biblical teachings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 portfolio-item isotope-item filter-app">
                            <div className="portfolio-content">
                                <div className="card mb-4 box-shadow">
                                    <div className="card-deck mb-1 text-center">
                                        <div className="card-body">
                                            <i className="bi bi-images fs-1 com-icon"></i>
                                            <h4 className="card-title pricing-card-title">Gallery</h4>
                                            <p className="mt-3 mb-4">Explore glorious moments of our events, meetings, and worship. ✨</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 portfolio-item isotope-item filter-app">
                            <div className="portfolio-content">
                                <div className="card mb-4 box-shadow">
                                    <div className="card-deck mb-1 text-center">
                                        <div className="card-body">
                                            <i className="bi bi-journal-text fs-1 com-icon"></i>
                                            <h4 className="card-title pricing-card-title">Bible</h4>
                                            <p className="mt-3 mb-4">Read, reflect, and grow with the Holy Scriptures for your journey. 📖✨</p>
                                        </div>
                                    </div>
                                    <span>
                                        <h4 className="card-title pricing-card-title">Comming Soon...</h4>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 portfolio-item isotope-item filter-app">
                            <div className="portfolio-content">
                                <div className="card mb-4 box-shadow">
                                    <div className="card-deck mb-1 text-center">
                                        <div className="card-body">
                                            <i className="bi bi-quote fs-1 com-icon"></i>

                                            <h4 className="card-title pricing-card-title">Testimonials & Stories</h4>
                                            <p className="mt-3 mb-4">Be inspired by real-life stories of faith and transformation.</p>
                                        </div>
                                        <span>
                                            <h4 className="card-title pricing-card-title">Comming Soon...</h4>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

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

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Multimedia;