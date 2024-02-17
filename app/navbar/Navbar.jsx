"use client";

import React, { useEffect, useRef, useState } from "react";
import NavProfileDropdown from "../dropdown/navProfileDropdown";
import LaguangeDropdown from "../dropdown/laguangeDropdown";
import SearchBar from "../searchbar/SearchBar";
import countries from "../db/Countries";
import SideMenu from "../dropdown/sideMenu";

const Navbar = () => {
  const navProfileRef = useRef(null);
  const langMenuRef = useRef(null);
  const destMenuRef = useRef(null);
  const destMenuRef2 = useRef(null);
  const calendRef = useRef(null);
  const guestRef = useRef(null);

  const [showProfileDrop, setShowProfileDrop] = useState("");
  const [showLangDrop, setShowLangDrop] = useState("");
  const [sideMenu, setSideMenu] = useState("");

  const [destination, setDestination] = useState("");
  const [showDestinationDrop, setShowDestinationDrop] = useState("");
  const [showDestinationDrop2, setShowDestinationDrop2] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showCalendarDrop, setShowCalendarDrop] = useState("");

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [showGuestDrop, setShowGuestDrop] = useState("");

  //SHOW DESTINATION DROP
  const handleDestinationShow = e => {
    const value = destination;

    if (countries.some(country => country.country.toLowerCase() === value.toLowerCase()) || !value) {
      setShowDestinationDrop2("");
      setShowDestinationDrop("show");
    } else {
      setShowDestinationDrop("");
      setShowDestinationDrop2("show");
    }
  };

  //HIDE DESTINATION DROP
  const handleDestinationHide = () => {
    setShowDestinationDrop("");
    setShowDestinationDrop2("");
    !startDate && !endDate ? setShowCalendarDrop("show") : setShowCalendarDrop("");
  };

  //CALENDAR
  const handleCalendarShow = () => {
    setShowCalendarDrop(prev => (prev === "" ? "show" : ""));
  };
  const handleCalendarHide = () => {
    setShowCalendarDrop("");
    !adults && !children && !pets ? setShowGuestDrop("show") : setShowGuestDrop("");
  };

  //GUESTS
  const handleGuestsShow = () => {
    setShowGuestDrop(prev => (prev === "" ? "show" : ""));
  };

  //MENUS
  const handleLaguangeShow = () => {
    setShowLangDrop(prev => (prev === "" ? "show" : ""));
  };
  const handleProfileShow = () => {
    setShowProfileDrop(prev => (prev === "" ? "show" : ""));
  };
  const handleSideMenu = () => {
    setSideMenu(prev => (prev === "" ? "show" : ""));
  };

  //HIDE ON CLICK OUTSIDE
  const handleClickOutside = e => {
    if (
      (showProfileDrop === "show" && !navProfileRef.current?.contains(e.target)) ||
      (showLangDrop === "show" && !langMenuRef.current?.contains(e.target)) ||
      (showDestinationDrop === "show" && !destMenuRef.current?.contains(e.target)) ||
      (showDestinationDrop2 === "show" && !destMenuRef2.current?.contains(e.target)) ||
      (showCalendarDrop === "show" && !calendRef.current?.contains(e.target)) ||
      (showGuestDrop === "show" && !guestRef.current?.contains(e.target))
    ) {
      setShowProfileDrop("");
      setShowLangDrop("");
      setShowDestinationDrop("");
      setShowDestinationDrop2("");
      setShowCalendarDrop("");
      setShowGuestDrop("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfileDrop, showLangDrop, showDestinationDrop, showDestinationDrop2, showCalendarDrop, showGuestDrop]);

  const searchProps = {
    destination: destination,
    setDestination: setDestination,
    countries: countries,
    showDestinationDrop: showDestinationDrop,
    setShowDestinationDrop: setShowDestinationDrop,
    showDestinationDrop2: showDestinationDrop2,
    setShowDestinationDrop2: setShowDestinationDrop2,
    destMenuRef: destMenuRef,
    destMenuRef2: destMenuRef2,
    handleDestinationShow: handleDestinationShow,
    handleDestinationHide: handleDestinationHide,
    showCalendarDrop: showCalendarDrop,
    calendRef: calendRef,
    handleCalendarShow: handleCalendarShow,
    startDate: startDate,
    setStartDate: setStartDate,
    endDate: endDate,
    setEndDate: setEndDate,
    showGuestDrop: showGuestDrop,
    guestRef: guestRef,
    handleGuestsShow: handleGuestsShow,
    adults: adults,
    setAdults: setAdults,
    children: children,
    setChildren: setChildren,
    pets: pets,
    setPets: setPets,
    handleCalendarHide: handleCalendarHide,
  };

  return (
    <nav className="navbar">
      {/* BRAND */}
      <div className="nav-brand">
        <img
          src="/logo.png"
          alt="BookinGo logo"
          className="navbar-logo"
        />
        <h1>BookinGo</h1>
      </div>

      {/* SEARCH BAR */}
      <SearchBar {...searchProps} />

      {/* LAGUANGE MENU */}
      <div
        className="navbar-laguange cursor-pointer"
        onClick={() => handleLaguangeShow()}
        ref={langMenuRef}
        id="laguange-menu"
      >
        <img
          src="/english.png"
          alt="English laguange"
          className="laguange-icon"
        />
        <span>English</span>
      </div>

      {/* NAVBAR MENU */}
      <div className="navbar-control">
        <div
          className="navbar-profile"
          ref={navProfileRef}
          onClick={() => {
            handleProfileShow();
          }}
        >
          <img
            src="/profile.png"
            className="navbar-profile-icon"
            alt="Navbar profile icon"
          />
        </div>
        <div
          className="navbar-menu"
          onClick={() => {
            handleSideMenu();
          }}
        >
          <img
            src="/menu.png"
            className="navbar-menu-icon"
            alt="Navbar menu icon"
          />
        </div>
        <NavProfileDropdown showProfileDrop={showProfileDrop} />
        <LaguangeDropdown showLangDrop={showLangDrop} />
        <SideMenu sideMenu={sideMenu}/>
      </div>
    </nav>
  );
};

export default Navbar;
