import Image from "next/image";
import React from "react";
import image1 from "../public/assets/image1.jpg";
import image2 from "../public/assets/image2.jpg";

const ImageCollage = ({ bannerHeading }) => {
  return (
    <div className="relative w-[200] h-[200px] m-3 bg-brandSecondary rounded-lg">
      <Image
        src={image1}
        width={300}
        height={100}
        alt="working women"
        className="absolute -left-8 -top-8 rounded-lg shadow-lg shadow-gray-700"
      />
      <Image
        src={image2}
        width={300}
        height={500}
        alt="factory worker"
        className="absolute rounded-lg -bottom-8 -right-8 shadow-lg shadow-gray-700"
      />
    </div>
  );
};

export default ImageCollage;
