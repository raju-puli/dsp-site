import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

import "./calendar.css";

const festivals: { [key: string]: string[] } = {
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
    Tuesday: "11:00 AM - 2:00 PM",
    Thursday: "3:00 PM - 5:00 PM",
    Friday: "5:00 PM - 7:00 PM",
    Saturday: "6:00 PM - 9:00 PM"
};

const Calendar: React.FC = () => {
    const navigate = useNavigate();
    const today = new Date();
    const [selectedYear, setSelectedYear] = useState(today.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());

    const todayDate = new Date().toLocaleDateString("en-US", { weekday: "long" }) as keyof typeof prayerTimings;
    // const prayerTime = `Today prayer at ${prayerTimings[todayDate]}` || "No scheduled prayers today";
    const prayerTime = prayerTimings[todayDate] ? `Today prayer at ${prayerTimings[todayDate]}` : "No scheduled prayers today";

    const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <>
            <section className="hero section dark-background bg-image">
                <img src="/assets/img/hero-bg.jpg" alt="Hero background" data-aos="fade-in" />
            </section>
            <div id="calendar">
                <button type="button" className="back-btn me-2" aria-label="Go Back" onClick={() => navigate(-1)}>
                    <i className="bi bi-arrow-left-circle fs-4"></i>
                    <span className="d-none d-md-flex"> Back </span>
                </button>
                <div className="d-flex align-items-center justify-content-center head-content">
                    <img src={logo} width="80" height="80" alt="Logo" className="me-2 logo" />
                    <div className="text-center">
                        <h1>{months[selectedMonth]} {selectedYear}</h1>
                        {/* <p>Today is {todayDate}, Prayer Time: {prayerTime}</p> */}
                        <p>{prayerTime}</p>
                    </div>
                </div>
                {/* Year and Month Selection */}
                <div className="calendar-grid">
                    <label className="d-flex align-items-center">
                        <span className="d-none d-md-flex"> Select Year:</span>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(Number(e.target.value))}>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </label>

                    <label className="d-flex align-items-center">
                        <span className="d-none d-md-flex"> Select Month:</span>
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                            {months.map((month, index) => (
                                <option key={index} value={index}>{month}</option>
                            ))}
                        </select>
                    </label>
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
                        // const dayOfWeek = dateObj.getDay();

                        // let bgColor = "";
                        // if (dayOfWeek === 0) bgColor = "#ffcccc";
                        // if (dayOfWeek === 6) bgColor = "#ffebcc";
                        // if (festivals[dateKey]) bgColor = "#ffeb99";

                        return (
                            // <li
                            //     key={day}
                            //     className="calendar-day"
                            //     style={{
                            //         border: "1px solid #ddd",
                            //         padding: "10px",
                            //         borderRadius: "5px",
                            //         // background: bgColor,
                            //         transition: "transform 0.2s",
                            //         cursor: "pointer",
                            //         boxShadow: isToday ? "0 0 5px 2px blue" : "none" // Highlight today's date
                            //     }}
                            // >
                            //     <strong style={{ fontSize: "1.2rem", color: "#333" }}>{day + 1}</strong>
                            //     {festivals[dateKey] && (
                            //          festivals[dateKey].join(", ") 
                            //     )}
                            // </li>

                            <li key={`${selectedYear}-${selectedMonth}-${day}`} className={`${isToday ? "highlightTodayCls" : ""}`} ><time dateTime={`${selectedYear}-${selectedMonth}-${day + 1}`}>{day + 1}</time>{festivals[dateKey] && (
                                festivals[dateKey].join(", ")
                            )}</li>
                        );
                    })}
                </ul>
            </div >

            {/* Add CSS for hover effect */}
            <style>
                {
                    `
                    .calendar-day:hover {
                        transform: scale(1.05);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                `}
            </style >
        </>
    );
};

export default Calendar;
