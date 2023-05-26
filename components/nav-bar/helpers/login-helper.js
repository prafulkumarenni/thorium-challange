import React from "react";
import InstaSvg from "../../../public/assets/insta.svg";
import TwitterSvg from "../../../public/assets/twitter.svg";
import FacebookSvg from "../../../public/assets/facebook.svg";
import { BsChevronDown } from "react-icons/bs";

import Image from "next/image";

const svgList = [
  {
    src: InstaSvg,
    altText: "Login with instagram",
  },
  {
    src: FacebookSvg,
    altText: "Login with facebook",
  },
  {
    src: TwitterSvg,
    altText: "Login with twitter",
  },
];

const LoginHelper = () => {
  return (
    <div className="lg:block">
      <div className="pl-8 flex items-center md:ml-6 lg:justify-end">
        <button className="bg-brandSecondary px-4 py-2 rounded-md text-sm font-medium text-gray-800 flex w-24 h-10">
          <BsChevronDown className="mt-1 mr-1" />
          Log In
        </button>
        <div className="before:content before:text-gray-400 before:inline-block before:mx-2">
          |
        </div>
        {svgList.map((svg, index) => (
          <div key={index} className="ml-4 flex items-center space-x-2">
            <a href="#">
              <Image src={svg.src} alt={svg.altText} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginHelper;
