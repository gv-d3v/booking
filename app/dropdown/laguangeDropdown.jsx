import React, { useEffect, useState } from "react";

const LaguangeDropdown = ({ showLangDrop }) => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div
      className={`dropdown-menu laguange ${showLangDrop}`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <ul>
        <li
          className="cursor-pointer"
          onClick={() => {}}
        >
          <img
            src="/english.png"
            alt="English laguange"
            className="laguange-icon"
          />
          <span>English</span>
        </li>
        <li className="cursor-pointer">
          {" "}
          <img
            src="/serbian.png"
            alt="Serbian laguange"
            className="laguange-icon"
          />
          <span>Serbian</span>
        </li>
      </ul>
    </div>
  );
};

export default LaguangeDropdown;
