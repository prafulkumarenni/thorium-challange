import Banner from "@/components/banner/banner";
import BannerPrimary from "@/components/banner/bannerPrimary";
import Carousel from "@/components/carousel/carousel";
import { bannerPrimaryData } from "../components/banner/constants";

export default function Home() {
  return (
    <div title="Home Page" className="grid grid-cols-1">
      <a href="#main-content" className="sr-only focus:not-sr-only z-50">
        Skip to main content
      </a>
      <BannerPrimary bannerPrimaryData={bannerPrimaryData} />
      <Banner />
      <Carousel id="main-content" />
    </div>
  );
}
