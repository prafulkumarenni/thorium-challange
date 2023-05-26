import React from "react";
import Image from "next/image";
import Image1 from "../../public/assets/image1.jpg";

const Banner = () => {
  return (
    <div className="xl:h-[500px] lg:flex w-full md:p-20 p-8">
      <div className="md:h-[400px] lg:h-[330px] xl:h-[400px] bg-brandSecondary rounded-lg shadow-lg shadow-gray-700">
        <Image
          src={Image1}
          alt="Knowing the numbers is never enough"
          height={400}
          width="100%"
          className="translate-x-5 -translate-y-5 rounded-lg"
        />
      </div>

      <div className="xl:mx-auto text-black lg:w-1/2 md:pl-16 pt-4">
        <p
          role="heading"
          aria-level={2}
          className="text-4xl md:text-5xl font-bold "
        >
          Knowing the numbers is never enough.
        </p>
        <p className="text-lg mt-4">
          Its about understanding the opportunities and challenges behind the
          numbers — and planning for a stronger future. Whats the right product
          selection for your customers? Which tools and information could make
          your business even more successful? At Southern Glazers, we tailor our
          services for each and every one of our customers. Because we know that
          when we come together, theres always something to celebrate.
        </p>
      </div>
    </div>
  );
};

export default Banner;
