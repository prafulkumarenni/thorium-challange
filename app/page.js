import Banner from "@/components/banner/banner";
import BannerPrimary from "@/components/banner/bannerPrimary";
import Carousel from "@/components/carousel/carousel";
import { bannerPrimaryData } from "../components/banner/constants";

export default function Home() {
  return (
    <div title="Home Page" className="grid grid-cols-1">
      <BannerPrimary bannerPrimaryData={bannerPrimaryData} />
      <Banner />
      <Carousel id="main-content" />
    </div>
  );
}
