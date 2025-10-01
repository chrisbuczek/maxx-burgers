import { ChooseCup } from "../components/common/ChooseCup/ChooseCup";
import { ThreeButtons } from "../components/common/ThreeButtons/ThreeButtons";
import { useEffect, useState } from "react";
import { VideoCarousel } from "../components/common/VideoCarousel/VideoCarousel";
import {
  data as videoCarouselData,
  desktopData as videoCarouselDesktopData,
} from "../components/common/VideoCarousel/data";
import { LogoNavbar } from "../components/common/LogoNavbar/LogoNavbar";
import { ChooseLanguage } from "../components/common/ChooseLanguage/ChooseLanguage";
const Metadata = () => (
  <>
    <title>Start Order | Maxx Burgers</title>
    <meta name="description" content="Start your order at Maxx Burgers" />
  </>
);

function Page() {
  return (
    <>
      <Metadata />
      <LogoNavbar />
      <div className="flex flex-col items-center justify-center">
        <VideoCarousel
          data={videoCarouselData}
          desktopData={videoCarouselDesktopData}
          className={`w-full`}
        />
        <div className=" w-full h-[1500px] bg-maxbeige z-10">
          <div className="bg-maxbeige">
            <ThreeButtons className=" top-[-50px]" />
            <div className="mt-20 flex flex-col gap-20">
              <ChooseCup />
              <ChooseLanguage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
