import React from "react";
import SideMenuButton from "../custom-css/utils/sideMenuButton";
import FilterIconSVG from "../custom-css/icons/filterIconSVG";

const SideMenu = ({ sideMenu }) => {
  return (
    <div className={`side-menu ${sideMenu}`}>
      <div className="menu-label">
        <span className="">Menu</span>
      </div>

      <ul>
        <li>
          <SideMenuButton icon={<FilterIconSVG />} />
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
