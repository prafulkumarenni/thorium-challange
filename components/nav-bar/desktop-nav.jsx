import React from "react";
import LoginHelper from "./helpers/login-helper";
import Image from "next/image";
import NavLinks from "./helpers/nav-links";

const DesktopNavbar = () => {
  return (
    <nav>
      <div className="mx-auto lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="ml-auto my-5">
            <LoginHelper />
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
