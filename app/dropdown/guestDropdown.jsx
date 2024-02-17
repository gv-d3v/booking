import React, { useEffect, useState } from "react";
import MinusIconSVG from "../custom-css/icons/minusIconSVG";
import PlusIconSVG from "../custom-css/icons/plusIconSVG";

const GuestDropdown = ({ showGuestDrop, guestRef, popupLeft, adults, setAdults, guestChildren, setGuestChildren, pets, setPets }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleIncremenet = (value, setValue) => {
    setValue((value += 1));
  };

  const handleDecremenet = (value, setValue) => {
    if (value > 0) {
      setValue((value -= 1));
    }
  };

  return (
    <div>
      <React.Fragment>
        <div
          style={{ display: isVisible ? "block" : "none", left: `${popupLeft + 290}px` }}
          className={`dropdown-menu destination guests ${showGuestDrop}`}
          ref={guestRef}
        >
          <ul>
            <li className="cursor-pointer">
              <span className="guests-label">Adults:</span>
              <button
                className={`guest-decrement ${adults < 1 ? "disabled" : ""}`}
                onClick={() => {
                  handleDecremenet(adults, setAdults);
                }}
              >
                <MinusIconSVG />
              </button>
              <span className="guests-number">{adults}</span>
              <button
                className={`guest-increment`}
                onClick={() => {
                  handleIncremenet(adults, setAdults);
                }}
              >
                <PlusIconSVG />
              </button>
            </li>
            <hr className="line-break" />
            <li className="cursor-pointer">
              <span className="guests-label">Children:</span>
              <button
                className={`guest-decrement ${guestChildren < 1 ? "disabled" : ""}`}
                onClick={() => {
                  handleDecremenet(guestChildren, setGuestChildren);
                }}
              >
                <MinusIconSVG />
              </button>
              <span className="guests-number">{guestChildren}</span>
              <button
                className={`guest-increment`}
                onClick={() => {
                  handleIncremenet(guestChildren, setGuestChildren);
                }}
              >
                <PlusIconSVG />
              </button>
            </li>
            <hr className="line-break" />
            <li className="cursor-pointer">
              <span className="guests-label">Pets:</span>
              <button
                className={`guest-decrement ${pets < 1 ? "disabled" : ""}`}
                onClick={() => {
                  handleDecremenet(pets, setPets);
                }}
              >
                <MinusIconSVG />
              </button>
              <span className="guests-number">{pets}</span>
              <button
                className={`guest-increment`}
                onClick={() => {
                  handleIncremenet(pets, setPets);
                }}
              >
                <PlusIconSVG />
              </button>
            </li>
          </ul>
        </div>
      </React.Fragment>
    </div>
  );
};

export default GuestDropdown;
