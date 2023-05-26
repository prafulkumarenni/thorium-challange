import Image from "next/image";
import React from "react";
import ArrowSvg from "../../public/assets/arrow.svg";
import Link from "next/link";

const Card = ({ image, heading, linkPath, linkText }) => {
  return (
    <div className="p-4 text-center w-full text-black">
      <Image
        src={image}
        width={172}
        height={172}
        alt={linkText}
        className="mx-auto"
      />
      <p className=" text-xl font-bold mt-4">{heading}</p>
      <div className="flex justify-center">
        <Link
          role="button"
          href={linkPath}
          className=" hover:text-gray-300 px-1"
        >
          {linkText}
        </Link>
        <Image src={ArrowSvg} alt="Arrow svg" />
      </div>
    </div>
  );
};

export default Card;
