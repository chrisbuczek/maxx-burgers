import { ChooseCup } from "../components/ChooseCup/ChooseCup";
import { ThreeButtons } from "../components/ThreeButtons/ThreeButtons";
import { useEffect, useState } from "react";
import { VideoCarousel } from "../components/VideoCarousel/VideoCarousel";
import {
  data as videoCarouselData,
  desktopData as videoCarouselDesktopData,
} from "../components/VideoCarousel/data";
import { LogoNavbar } from "../components/LogoNavbar/LogoNavbar";
import { ChooseLanguage } from "../components/ChooseLanguage/ChooseLanguage";
const Metadata = () => (
  <>
    <title>Start Order | Maxx Burgers</title>
    <meta name="description" content="Start your order at Maxx Burgers" />
  </>
);

function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Metadata />
      <LogoNavbar />
      <div>
        <VideoCarousel
          data={videoCarouselData}
          desktopData={videoCarouselDesktopData}
          className="w-full h-screen object-cover"
        />
        <div className="relative w-full mx-auto">
          {/* bottom beige */}
          <div
            className="bg-maxbeige absolute bottom-0  w-full h-[500px] z-2 flex flex-col items-center transition-all"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <ThreeButtons className="absolute top-[-50px]" />
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
