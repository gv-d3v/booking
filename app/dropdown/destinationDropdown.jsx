"use client";

import React, { useEffect, useState } from "react";
import MapChart from "../map/MapChart";

const DestinationDropdown = ({
  showDestinationDrop,
  showDestinationDrop2,
  destMenuRef,
  destMenuRef2,
  handleDestinationHide,
  destination,
  setDestination,
  popupLeft,
  searchedDestination
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <React.Fragment>
      <div
        style={{ display: isVisible ? "block" : "none", left: `${popupLeft-127}px` }}
        className={`dropdown-menu destination ${showDestinationDrop}`}
        ref={destMenuRef}
        onClick={() => handleDestinationHide()}
      >
        <MapChart
          setDestination={setDestination}
          destination={destination}
        />
      </div>
      <div
        style={{ display: isVisible ? "block" : "none", left: `${popupLeft}px` }}
        className={`dropdown-menu destination list ${searchedDestination.length > 0 ? showDestinationDrop2 : null}`}
        ref={destMenuRef2}
        onClick={() => handleDestinationHide()}
      >
        <ul className="country-ul">
          {searchedDestination.map((destination, index) => {
            return (
              <li
                className="cursor-pointer"
                key={index + 1}
                onClick={e => setDestination(e.target.innerText)}
              >
                <span>{destination.country}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default DestinationDropdown;
