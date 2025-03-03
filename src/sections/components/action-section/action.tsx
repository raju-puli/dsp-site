import "./weekly_calandar.css";

const Action = () => {
    return (
        <section id="call-to-action" className="call-to-action section dark-background">

            <img src="assets/img/cta-bg.jpg" alt="" />

            <div className="container">

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    <h2 className="text-center mb-4">Weekly Calendar</h2>
                    <div className="col-xl-12 text-center text-xl-start">
                        <div className="table-responsive">
                            <table className="table table-bordered calendar-table shadow-lg">
                                <thead className="table-dark text-uppercase text-center">
                                    <tr>
                                        <th>Sunday</th>
                                        <th>Tuesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td><div className="time-slot bg-light p-2 rounded">10:30 AM - 1:00 PM</div></td>
                                        <td><div className="time-slot bg-light p-2 rounded">11:00 AM - 2:00 PM</div></td>
                                        <td><div className="time-slot bg-light p-2 rounded">3:00 PM - 5:00 PM</div></td>
                                        <td><div className="time-slot bg-light p-2 rounded">5:00 PM - 7:00 PM</div></td>
                                        <td><div className="time-slot bg-light p-2 rounded">6:00 PM - 9:00 PM</div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="alert alert-info mt-4 text-center shadow-sm">
                            <strong>Note:</strong> For every month, first Sunday - <span className="text-danger">Balla Aaradhana</span>. First Saturday - <span className="text-danger">All Night Prayer</span>.
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Action;