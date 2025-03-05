import { useNavigate } from "react-router-dom";

import "./weekly_calendar.css";

const schedule = [
    { day: "Sunday", time: "10:30 AM - 1:00 PM" },
    { day: "Tuesday", time: "11:00 AM - 2:00 PM" },
    { day: "Thursday", time: "3:00 PM - 5:00 PM" },
    { day: "Friday", time: "5:00 PM - 7:00 PM" },
    { day: "Saturday", time: "6:00 PM - 9:00 PM" },
];

const prayerTimings: Record<string, string> = {
    Sunday: "10:30 AM - 1:00 PM",
    Tuesday: "11:00 AM - 2:00 PM",
    Thursday: "3:00 PM - 5:00 PM",
    Friday: "5:00 PM - 7:00 PM",
    Saturday: "6:00 PM - 9:00 PM"
};

const Action = () => {
    const navigate = useNavigate();
    const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" }) as keyof typeof prayerTimings;
    const prayerTime = prayerTimings[today] || "No scheduled prayers today";

    return (
        <section id="call-to-action" className="call-to-action section dark-background">
            <div className="calendar-cls" onClick={() => navigate("/calendar")}>
                <i className="bi bi-calendar fs-4 me-2" /> Calendar
            </div>
            <img src="assets/img/cta-bg.jpg" alt="" className="background-image" />
            <div className="container">
                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    <h2 className="text-center mb-4">Weekly Calendar</h2>
                    <div className="col-xl-12 text-center text-xl-start">
                        <div className="table-responsive">
                            <table className="table table-bordered calendar-table shadow-lg">
                                <thead className="table-dark text-uppercase text-center">
                                    <tr>
                                        {schedule.map((item, index) => (
                                            <th key={index}>{item.day}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        {schedule.map((item, index) => {
                                            // Check if the current day matches the schedule day
                                            const isCurrentDay = item.day === currentDay;
                                            // Check if the day is Sunday
                                            const isSunday = item.day === "Sunday";
                                            return (
                                                <td
                                                    key={index}
                                                    className={`${isCurrentDay ? "highlight-current-day" : ""} ${isSunday ? "highlight-sunday" : ""
                                                        }`}
                                                >
                                                    <div className="time-slot bg-light p-2 rounded">{item.time}</div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center">
                            <i> <a href="/" className="prayer-time">Today is {today}, Prayer Time: {prayerTime}</a></i>
                        </p>
                        <div className="alert alert-info mt-4 text-center shadow-sm" data-aos="fade-up" data-aos-delay="200">
                            <strong>Note:</strong> For every month, first Sunday - <span className="text-danger">Balla Aaradhana</span>. First Saturday - <span className="text-danger">All Night Prayer</span>.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Action;