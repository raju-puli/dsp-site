const Services = () => {
    return (
        <section id="services" className="services section">

            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Programs & Services</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item  position-relative">
                            <div className="icon">
                                <i className="fas fa-praying-hands"></i>
                            </div>
                            <a className="stretched-link">
                                <h3>Worship</h3>
                            </a>
                            <p>Join us for regular worship services where we come together to praise and worship God, hear His word, and experience His presence.</p>
                        </div>
                    </div>
                    {/* <!-- End Service Item --> */}

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-book"></i>
                            </div>
                            <a className="stretched-link">
                                <h3>Bible Studies</h3>
                            </a>
                            <p>Participate in our groups to explore Scripture, deepen your understanding of God’s word, and apply it to daily life.</p>
                        </div>
                    </div>
                    {/* <!-- End Service Item --> */}

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fas fa-place-of-worship"></i>
                            </div>
                            <a className="stretched-link">
                                <h3>Prayer Ministry</h3>
                            </a>
                            <p>Engage in our prayer ministry through intercessory prayer, personal sessions, and prayer chains, supporting each other in times of need.</p>
                        </div>
                    </div>
                    {/* <!-- End Service Item --> */}

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fas fa-hands-helping"></i>
                            </div>
                            <a className="stretched-link">
                                <h3>Community Outreach</h3>
                            </a>
                            <p>Get involved in our programs serving the community through food drives, clothing donations, and support for those in need.</p>
                        </div>
                    </div>
                    {/* <!-- End Service Item --> */}

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <a className="stretched-link">
                                <h3>Youth and Children's Meetings</h3>
                            </a>
                            <p>Our dedicated youth and children’s meetings provide a safe and nurturing environment for young people to grow in faith through fun, engaging, and educational activities.</p>
                        </div>
                    </div>
                    {/* <!-- End Service Item --> */}

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="fas fa-user-md"></i>

                            </div>
                            <a className="stretched-link">
                                <h3>Counseling Services</h3>
                            </a>
                            <p>Access our pastoral counseling for guidance, support, and encouragement through life’s challenges.</p>
                        </div>
                    </div>
                    {/* <!-- End Service Item --> */}

                </div>

            </div>

        </section>
    )
}

export default Services;