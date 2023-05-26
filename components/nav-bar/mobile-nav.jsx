import React from "react";
import { IoClose } from "react-icons/io5";
import NavLinks from "./helpers/nav-links";
import LoginHelper from "./helpers/login-helper";
import Image from "next/image";
import LogoSvg from "../../public/assets/logo.svg";

const MobileNav = ({ onClose, isOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-navBg w-full h-full p-6 rounded-lg overflow-y-auto flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex-shrink-0 ml-5 my-3">
            <Image height={70} width={70} src={LogoSvg} alt="Logo" />
          </div>
          <button
            role="close button"
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
          >
            <IoClose role="presentation" size={24} />
          </button>
        </div>
        <div>
          <NavLinks />
        </div>
        <div className="mt-auto">
          <LoginHelper />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
