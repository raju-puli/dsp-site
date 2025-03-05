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

                        <div className="portfolio-item isotope-item filter-app">
                            <div className="portfolio-content p-2">
                                <div className="row d-flex align-items-center justify-content-between g-3">
                                    {[
                                        { title: "Songs", content: "Sing or listen to our uplifting worship and gospel songs. 🎶", icon: "bi-music-note", link: "/songs", cls: "music-note" },
                                        { title: "Events", content: "Stay connected with past and upcoming spiritual gatherings.", icon: "bi-calendar-week", comingSoon: true },
                                        { title: "Sermons & Teachings", content: "Gain wisdom through powerful sermons and biblical teachings.", icon: "bi-mic" },
                                        { title: "Gallery", content: "Explore glorious moments of our events, meetings, and worship. ✨", icon: "bi-images", comingSoon: true },
                                        { title: "Bible", content: "Read, reflect, and grow with the Holy Scriptures for your journey. 📖✨", icon: "bi-journal-text", comingSoon: true },
                                        { title: "Testimonials & Stories", content: "Be inspired by real-life stories of faith and transformation.", icon: "bi-quote", comingSoon: true }
                                    ].map((item, index) => (
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div
                                                className="card box-shadow mb-4"
                                                onClick={item.link ? () => navigate(item.link) : undefined}
                                            >
                                                <div className="card-body text-center">
                                                    <i className={`bi ${item.icon} ${item.cls} fs-1 com-icon`}></i>
                                                    <h4 className="card-title pricing-card-title">{item.title}</h4>
                                                    <p className="mt-3 mb-4">{item.content}</p>
                                                    {item.comingSoon && <span className="card-title pricing-card-title">Coming Soon...</span>}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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