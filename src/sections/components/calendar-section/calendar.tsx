import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./calendar.css";

const festivals: Record<string, string[]> = {
    "01-01": ["New Year"],
    "12-25": ["Christmas"],
    "10-24": ["Diwali (2022)"],
    "07-04": ["Independence Day (USA)"],
    "08-15": ["Independence Day (India)"],
    "11-23": ["Thanksgiving (2023)"],
    "10-02": ["Gandhi Jayanti"],
};

const prayerTimings: Record<string, string> = {
    Sunday: "10:30 AM - 1:00 PM",
    Monday: "",
    Tuesday: "11:00 AM - 2:00 PM",
    Wednesday: "",
    Thursday: "3:00 PM - 5:00 PM",
    Friday: "5:00 PM - 7:00 PM",
    Saturday: "6:00 PM - 9:00 PM"
};

const Calendar: React.FC = () => {
    const navigate = useNavigate();
    const today = new Date();
    const [selectedYear, setSelectedYear] = useState(today.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const calendarRef = useRef<HTMLDivElement | null>(null);
    const [openState, SetOpenState] = useState(true);

    const todayDate = today.toLocaleDateString("en-US", { weekday: "long" });
    const prayerTime = prayerTimings[todayDate] ? `Today prayer at ${prayerTimings[todayDate]}` : "No scheduled prayers today";

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1));
        if (selectedMonth === 0) setSelectedYear((prev) => prev - 1);
    };

    const handleNextMonth = () => {
        setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1));
        if (selectedMonth === 11) setSelectedYear((prev) => prev + 1);
    };

    useEffect(() => {
        setTimeout(() => {
            SetOpenState(false)
        }, 2000);
    }, [])

    useEffect(() => {
        const handleSwipe = (e: TouchEvent) => {
            if (!calendarRef.current) return;
            const touch = e.changedTouches[0];
            if (!touch || !calendarRef.current.dataset.startX) return;

            const diffX = touch.clientX - parseFloat(calendarRef.current.dataset.startX);
            if (diffX > 50) handlePrevMonth();
            if (diffX < -50) handleNextMonth();
        };

        const handleTouchStart = (e: TouchEvent) => {
            if (calendarRef.current) {
                calendarRef.current.dataset.startX = e.touches[0].clientX.toString();
            }
        };

        if (calendarRef.current) {
            calendarRef.current.addEventListener("touchstart", handleTouchStart);
            calendarRef.current.addEventListener("touchend", handleSwipe);
        }

        return () => {
            if (calendarRef.current) {
                calendarRef.current.removeEventListener("touchstart", handleTouchStart);
                calendarRef.current.removeEventListener("touchend", handleSwipe);
            }
        };
    }, [selectedMonth]);

    return (
        <>
            <section className="hero section dark-background bg-image">
                <img src="/assets/img/hero-bg.jpg" alt="Hero background" data-aos="fade-in" />
            </section>
            {openState ? (
                <div className="calendar-splash-container" data-aos="fade-in">
                    <div className="calendar-splash-text" data-aos="zoom-in" data-aos-delay="100">
                        <i className="fa-regular fa-calendar-days me-2"></i> Today is {todayDate} {months[selectedMonth]} {selectedYear}
                    </div>
                </div>
            ) : (
                <>
                    <div id="calendar" ref={calendarRef}>
                        <button className="back-btn" onClick={() => navigate(-1)}>
                            <i className="bi bi-arrow-left-circle fs-4"></i>
                            <span className="d-none d-md-flex"> Back </span>
                        </button>

                        <div className="d-flex align-items-center justify-content-center head-content">
                            <img src={logo} width="110" height="110" alt="Logo" className="logo" />
                            <div className="text-center">
                                <h1>{months[selectedMonth]} {selectedYear}</h1>
                                <p>{prayerTime}</p>
                            </div>
                        </div>

                        <div className="calendar-grid">
                            {/* <button className="arrow-btn" onClick={handlePrevMonth}>&lt;</button> */}
                            <label className="d-flex align-items-center">
                                <span className="d-none d-md-flex"> Select Year:</span>
                                <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <option key={i} value={2020 + i}>{2020 + i}</option>
                                    ))}
                                </select>
                            </label>
                            <label className="d-flex align-items-center">
                                <span className="d-none d-md-flex"> Select Month:</span>
                                <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                                    {months.map((month, i) => (
                                        <option key={i} value={i}>{month}</option>
                                    ))}
                                </select>
                            </label>
                            {/* <button className="arrow-btn" onClick={handleNextMonth}>&gt;</button> */}
                        </div>

                        <div id="arrow_2" className="arrow-wrapper">
                            <div className="arrow arrow--left" onClick={handlePrevMonth}>
                                <span>Prev</span>
                            </div>


                            <ul className="calendar-container">
                                {/* Weekday Headers */}
                                {weekdays.map((day, index) => (
                                    <div key={index} className="weekdays">
                                        {day}
                                    </div>
                                ))}

                                {/* Empty Slots for First Week */}
                                {Array.from({ length: getFirstDayOfMonth(selectedYear, selectedMonth) }).map((_, index) => (
                                    <div key={`empty-${index}`} style={{ visibility: "hidden" }}>.</div>
                                ))}

                                {/* Days in Month */}
                                {Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, day) => {
                                    const dateKey = `${(selectedMonth + 1).toString().padStart(2, "0")}-${(day + 1).toString().padStart(2, "0")}`;
                                    const dateObj = new Date(selectedYear, selectedMonth, day + 1);
                                    const isToday = dateObj.toDateString() === today.toDateString();
                                    return (
                                        <li key={`${selectedYear}-${selectedMonth}-${day}`} className={`${isToday ? "highlightTodayCls" : ""}`} ><time dateTime={`${selectedYear}-${selectedMonth}-${day + 1}`}>{day + 1}</time>{festivals[dateKey] && (
                                            festivals[dateKey].join(", ")
                                        )}</li>
                                    );
                                })}
                            </ul>
                            <div className="arrow arrow--right" onClick={handleNextMonth}>
                                <span>Next</span>
                            </div>
                        </div>
                    </div>
                </>)}
        </>
    );
};

export default Calendar;
