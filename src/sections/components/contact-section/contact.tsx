import { useState, useEffect } from "react";
import contact_details from "../../json-files/contact-details.json";
import "./contact.css";

const Contact = () => {
    const [defaultData, setDefaultData] = useState("khammam");
    const [filterData, setFilterData] = useState(
        contact_details.filter((details) => details.id === "khammam")
    );

    useEffect(() => {
        setFilterData(contact_details.filter((details) => details.id === defaultData));
    }, [defaultData]);

    const onSetDetails = (value: string) => {
        setDefaultData(value);
    };

    return (
        <section id="contact" className="contact section">
            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up" style={{ paddingBottom: "20px" }}>
                <h2>Contact</h2>
                <p>We welcome you to connect with us for prayers, events, or any inquiries</p>
            </div>
            {/* <!-- End Section Title --> */}

            <section className="portfolio" style={{ padding: "5px 0" }}>
                <div className="container">
                    <div data-layout="masonry" data-sort="original-order">
                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            {["khammam", "vizag", "chennai", "vijayawada", "hyderabad"].map((city, i) => (
                                <li key={i}
                                    className={defaultData === city ? "filter-active" : ""}
                                    onClick={() => onSetDetails(city)}
                                    data-filter="" >
                                    {city.charAt(0).toUpperCase() + city.slice(1)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <div className="container contact-details" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                            {filterData.map((data) => (
                                <iframe key={data.id} src={data.url} loading="lazy" ></iframe>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                {filterData.map((data) => (
                                    <p key={data.id}>{data.address}</p>
                                ))}
                            </div>
                        </div>

                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                {filterData.map((data) => (
                                    <p key={data.id}>{data.cell}</p>
                                ))}
                            </div>
                        </div>

                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                {filterData.map((data) => (
                                    <p key={data.id}>{data.email}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
