import Image from "next/image";
import React from "react";
import ArrowSvg from "../../public/assets/arrow.svg";

const Card = ({ image, heading, linkPath, linkText }) => {
  return (
    <div className="p-4 text-center w-full text-black">
      <Image
        src={image}
        width={172}
        height={172}
        alt="Image 1"
        className="mx-auto"
      />
      <h2 className=" text-xl font-bold mt-4">{heading}</h2>
      <div className="flex justify-center">
        <a href={linkPath} className=" hover:text-gray-300 px-1">
          {linkText}
        </a>
        <Image src={ArrowSvg} alt="" />
      </div>
    </div>
  );
};

export default Card;
