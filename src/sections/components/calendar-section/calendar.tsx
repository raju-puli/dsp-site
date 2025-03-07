import { useEffect, useState, useRef } from "react";
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

const Calendar = () => {
    const navigate = useNavigate();
    const today = new Date();
    const [selectedYear, setSelectedYear] = useState(today.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const calendarRef = useRef<HTMLDivElement | null>(null);
    const [openState, SetOpenState] = useState(true);

    console.log(today);

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
            <section className="hero section dark-background calendar bg-image">
                <img src="/assets/img/hero-bg.jpg" alt="Hero background" data-aos="fade-in" />
            </section>
            {openState ? (
                <div className="calendar-splash-container" data-aos="fade-in">
                    <div className="calendar-splash-text" data-aos="zoom-in" data-aos-delay="100">
                        <i className="fa-regular fa-calendar-days me-2"></i> Today is {todayDate} {months[selectedMonth]} {selectedYear}
                    </div>
                </div>) :
                <>
                    <div id="calendar" >
                        <button className="back-btn" onClick={() => navigate(-1)}>
                            <i className="bi bi-arrow-left-circle fs-4"></i>
                            <span className="d-none d-md-flex"> Back </span>
                        </button>
                        <section className="ftco-section">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 text-center mb-1">
                                        <h2 className="heading-section">
                                            <img src={logo} width="110" height="110" alt="Logo" className="logo" />
                                            <p>{prayerTime}</p>
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="elegant-calencar d-md-flex">
                                            <div className="wrap-header d-flex align-items-center img">
                                                <p id="reset">Today</p>
                                                <p id="reset-year">{today.getFullYear()}</p>
                                                <div id="header" className="p-0">
                                                    <div className="head-info">
                                                        <div className="head-month">{months[today.getMonth()]}</div>
                                                        <div className="head-day">{today.toString().split(" ")[2]}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="calendar-wrap">
                                                <div className="head-month">{months[selectedMonth]}</div>
                                                <div className="w-100 button-wrap d-flex align-items-center justify-content-center">
                                                    <div className="pre-button" onClick={handlePrevMonth}>
                                                        <i className="fa fa-chevron-left"></i>
                                                    </div>
                                                    <div className="next-button" onClick={handleNextMonth}>
                                                        <i className="fa fa-chevron-right"></i>
                                                    </div>
                                                </div>
                                                <table id="calendar">
                                                    <thead>
                                                        <tr>
                                                            {weekdays.map((day, index) => (
                                                                <th key={index}> {day}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Array.from({ length: 6 }).map((_, rowIndex) => (
                                                            <tr key={rowIndex}>
                                                                {Array.from({ length: 7 }).map((_, colIndex) => {
                                                                    const dayIndex = rowIndex * 7 + colIndex;
                                                                    const totalDays = getDaysInMonth(selectedYear, selectedMonth);
                                                                    const firstDayOffset = getFirstDayOfMonth(selectedYear, selectedMonth);

                                                                    if (dayIndex < firstDayOffset || dayIndex - firstDayOffset >= totalDays) {
                                                                        return <td key={colIndex}></td>;
                                                                    }

                                                                    const day = dayIndex - firstDayOffset + 1;
                                                                    const dateKey = `${(selectedMonth + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
                                                                    const dateObj = new Date(selectedYear, selectedMonth, day);
                                                                    const isToday = dateObj.toDateString() === today.toDateString();

                                                                    return (
                                                                        <>
                                                                            <td key={colIndex} className={`${isToday ? "active" : festivals[dateKey] ? "active-fest" : ""}`}>
                                                                                <time dateTime={`${selectedYear}-${selectedMonth}-${day}`}>{day}</time>
                                                                                {festivals[dateKey] && <span className="festival-span"><i> {day} - {festivals[dateKey].join(", ")}</i> </span>}
                                                                            </td>
                                                                        </>
                                                                    );
                                                                })}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            }
        </>
    );
};

export default Calendar;
