"use client";

import React, { useState } from "react";
import DesktopNavbar from "./desktop-nav";
import LogoSvg from "../../public/assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import MobileNav from "./mobile-nav";

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="bg-navBg flex justify-between">
      <div className="flex-shrink-0 ml-5 my-3">
        <Image height={70} width={70} src={LogoSvg} alt="Logo" />
      </div>
      <div className="hidden lg:block my-3">
        <DesktopNavbar />
      </div>
      <div className="lg:hidden flex mr-5">
        <button
          role="open mobile nav"
          className="text-brandSecondary hover:text-white focus:outline-none focus:text-white"
          onClick={toggleMobileNav}
        >
          <GiHamburgerMenu role="presentation" size={24} />
        </button>
      </div>
      {isMobileNavOpen && (
        <MobileNav onClose={toggleMobileNav} isOpen={isMobileNavOpen} />
      )}
    </div>
  );
};

export default NavBar;
