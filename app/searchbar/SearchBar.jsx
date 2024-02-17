"use client";
import React, { useEffect, useRef, useState } from "react";
import DestinationDropdown from "../dropdown/destinationDropdown";
import { debounce } from "lodash";
import CalendarDropdown from "../dropdown/calendarDropdown";
import GuestDropdown from "../dropdown/guestDropdown";
import SearchIconSVG from "../custom-css/icons/searchIconSVG";

const SearchBar = ({
  destination,
  setDestination,
  countries,
  showDestinationDrop,
  setShowDestinationDrop,
  showDestinationDrop2,
  setShowDestinationDrop2,
  destMenuRef,
  destMenuRef2,
  handleDestinationShow,
  handleDestinationHide,
  showCalendarDrop,
  calendRef,
  handleCalendarShow,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  showGuestDrop,
  guestRef,
  handleGuestsShow,
  adults,
  setAdults,
  guestChildren,
  setGuestChildren,
  pets,
  setPets,
  handleCalendarHide,
}) => {
  const searchRef = useRef(null);

  const [searchedDestination, setSearchedDestination] = useState([]);
  const [popupLeft, setPopupLeft] = useState(0);

  /*POPUP POSITION*/
  const handleWindowResize = () => {
    if (searchRef.current) {
      const searchRect = searchRef.current.getBoundingClientRect();
      setPopupLeft(searchRect.left);
    }
  };

  /*FILTER*/
  const allCountries = [...countries];

  const applyFilters = () => {
    let filteredCountries = allCountries;

    if (destination) {
      filteredCountries = filteredCountries.filter(countries => countries.country.toLowerCase().includes(destination.toLowerCase()));
    }
    destination ? setSearchedDestination(filteredCountries) : setSearchedDestination([]);
  };

  /*SEARCH LOGIC*/
  const debouncedHandleSearch = debounce(value => {
    setShowDestinationDrop("");
    setDestination(value);
    value ? setShowDestinationDrop2("show") : setShowDestinationDrop2("");
    !value ? setShowDestinationDrop("show") : null;
  }, 50);

  const handleSearch = e => {
    const value = e.target.value;
    debouncedHandleSearch(value);
  };

  //HANDLE GUESTS
  const handleGuests = () => {
    const guests = [];
    if (adults || guestChildren || pets) {
      if (adults === 1) {
        guests.push(`${adults} adult`);
      }
      if (adults > 1) {
        guests.push(`${adults} adults`);
      }
      if (guestChildren === 1) {
        guests.push(`${guestChildren} child`);
      }
      if (guestChildren > 1) {
        guests.push(`${guestChildren} children`);
      }
      if (pets === 1) {
        guests.push(`${pets} pet`);
      }
      if (pets > 1) {
        guests.push(`${pets} pets`);
      }
    }
    return guests;
  };

  useEffect(() => {
    applyFilters();

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [destination]);

  return (
    <div className="search-bar">
      <input
        ref={searchRef}
        placeholder="Destination"
        onClick={() => handleDestinationShow()}
        onChange={e => {
          handleSearch(e);
        }}
        value={destination}
      />
      <input
        placeholder="Date"
        onClick={() => handleCalendarShow()}
        defaultValue={startDate ? `${startDate} - ${endDate}` : ""}
        className="calendar-input"
      />
      <input
        placeholder="Guests"
        onClick={() => handleGuestsShow()}
        defaultValue={handleGuests()}
      />
      <button className="search-icon">
        <SearchIconSVG />
      </button>
      <DestinationDropdown
        showDestinationDrop={showDestinationDrop}
        showDestinationDrop2={showDestinationDrop2}
        destMenuRef={destMenuRef}
        destMenuRef2={destMenuRef2}
        handleDestinationHide={handleDestinationHide}
        destination={destination}
        setDestination={setDestination}
        popupLeft={popupLeft}
        searchedDestination={searchedDestination}
      />
      <CalendarDropdown
        showCalendarDrop={showCalendarDrop}
        popupLeft={popupLeft}
        calendRef={calendRef}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        endDate={endDate}
        handleCalendarShow={handleCalendarShow}
        handleCalendarHide={handleCalendarHide}
      />

      <GuestDropdown
        showGuestDrop={showGuestDrop}
        guestRef={guestRef}
        popupLeft={popupLeft}
        adults={adults}
        setAdults={setAdults}
        guestChildren={guestChildren}
        setGuestChildren={setGuestChildren}
        pets={pets}
        setPets={setPets}
      />
    </div>
  );
};

export default SearchBar;
