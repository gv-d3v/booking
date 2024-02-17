import React from "react";

const SideMenuButton = ({ icon }) => {
  return (
    <button className="side-menu-button">
      {icon}
      <span>Filters</span>
    </button>
  );
};

export default SideMenuButton;
