const About = () => {
    return (
        <section id="about" className="about section">

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-6 position-relative d-flex align-items-center order-lg-last" data-aos="fade-up"
                        data-aos-delay="200">
                        <img src="assets/img/about.jpg" className="img-fluid flex-shrink-0" alt="" />
                        {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a> */}
                    </div>

                    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                        <h3>About Us</h3>
                        <p>
                            At Dyvaswarupi Association we believe in the transformative power of Jesus Christ and strive to embody His
                            divine love in every aspect of our lives. Our mission is to spread the Gospel, nurture spiritual growth,
                            and foster a community grounded in faith, hope, and love.
                        </p>
                        <ul>
                            <li>
                                <i className="bi bi-megaphone"></i>
                                <div>
                                    <h5>Proclaim the Good News</h5>
                                    <p>We share the message of Christ’s love, salvation, and the promise of eternal life with everyone, spreading hope and faith to all who seek Him.</p>
                                </div>
                            </li>
                            <li>
                                <i className="bi bi-person-standing"></i>

                                <div>
                                    <h5>Nurture Spiritual Growth</h5>
                                    <p>Providing resources and opportunities to deepen one's relationship with God through Bible studies, prayer groups, and spiritual retreats.</p>
                                </div>
                            </li>
                            <li>
                                <i className="bi bi-people"></i>
                                <div>
                                    <h5>Foster Community</h5>
                                    <p>Building a supportive and loving community where everyone is welcomed and valued, reflecting the body of Christ.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default About;