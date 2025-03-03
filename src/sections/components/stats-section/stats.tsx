

const Stats = () => {

    return (
        <section id="stats" className="stats section light-background">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span
                                data-purecounter-start="0"
                                data-purecounter-end="232"
                                data-purecounter-duration="1"
                                className="purecounter"
                            ></span>
                            <p>Believers</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span
                                data-purecounter-start="0"
                                data-purecounter-end="521"
                                data-purecounter-duration="1"
                                className="purecounter"
                            ></span>
                            <p>Pastors</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span
                                data-purecounter-start="0"
                                data-purecounter-end="1453"
                                data-purecounter-duration="1"
                                className="purecounter"
                            ></span>
                            <p>Churches</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
