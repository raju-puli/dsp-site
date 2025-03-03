const Team = () => {
    return (
        <section id="team" className="team section">

            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="team-member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Munna Naik</h4>
                                <span>Chief Executive Officer</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter-x"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Team Member --> */}

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="team-member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Sawjanya</h4>
                                <span>Product Manager</span>
                                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter-x"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Team Member --> */}

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="team-member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Raju Puli</h4>
                                <span>CTO</span>
                                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter-x"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Team Member --> */}

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="team-member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Bhoomika</h4>
                                <span>Accountant</span>
                                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter-x"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Team Member --> */}

                </div>

            </div>

        </section>
    )
}

export default Team;