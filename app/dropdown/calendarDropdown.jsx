"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarDropdown = ({ popupLeft, showCalendarDrop, calendRef, setStartDate, setEndDate, handleCalendarHide }) => {
  const [isVisible, setIsVisible] = useState(false);
  const currentDate = new Date();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDateChange = newDate => {
    setStartDate(newDate[0].toLocaleDateString("en-US", { month: "short", day: "numeric" }));
    setEndDate(newDate[1].toLocaleDateString("en-US", { month: "short", day: "numeric" }));
    if (newDate[1]) {
      handleCalendarHide();
    }
  };

  return (
    <React.Fragment>
      <div
        style={{ display: isVisible ? "block" : "none", left: `${popupLeft + 40}px` }}
        className={`dropdown-menu destination calendar ${showCalendarDrop}`}
        ref={calendRef}
      >
        <Calendar
          onChange={handleDateChange}
          selectRange={true}
          minDate={currentDate}
        />
      </div>
    </React.Fragment>
  );
};

export default CalendarDropdown;
