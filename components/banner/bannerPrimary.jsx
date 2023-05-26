import ImageCollage from "../collage";

const BannerPrimary = ({ bannerPrimaryData }) => {
  const { bannerHeading, bannerSubHeading, bannerButtonText } =
    bannerPrimaryData;
  return (
    <div className="bg-brandPrimary mb-4 md:p-20 p-8">
      <div className="mx-auto lg:flex items-center md:py-16 justify-between">
        <div className="lg:w-1/2">
          <p className="text-4xl md:text-5xl font-bold text-white">
            {bannerHeading}
          </p>
          <p className="text-lg mt-4 text-gray-300">{bannerSubHeading}</p>
          <button className="mt-6 bg-brandSecondary text-black px-4 py-2 rounded-md text-sm font-bold">
            {bannerButtonText}
          </button>
        </div>
        <div className="lg:w-1/2 md:px-20 p-8 mt-8 md:mt-0">
          <ImageCollage />
        </div>
      </div>
    </div>
  );
};

export default BannerPrimary;
