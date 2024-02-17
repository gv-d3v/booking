import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavProfileDropdown = ({ showProfileDrop }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleLogIn = () => {
    console.log("Login");
  };

  const handleSignUp = () => {
    console.log("Signup");
  };

  return (
    <div className={`dropdown-menu ${showProfileDrop}`} style={{ display: isVisible ? "block" : "none" }}>
      <ul>
        <li
          className="cursor-pointer"
          onClick={() => {
            handleLogIn();
            //handleMenuShow()
          }}
        >
          Log in
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            handleSignUp();
          }}
        >
          Sign up
        </li>
        <hr className="line-break" />
        <li>
          <Link href="/vouchers">Vouchers</Link>
        </li>
        <li>
          <Link href="/help-desk">Help Desk</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavProfileDropdown;
