import "./App.css";
import { ChooseCup } from "./components/common/ChooseCup/ChooseCup";
import { ThreeButtons } from "./components/common/ThreeButtons/ThreeButtons";
import { useEffect, useState } from "react";
import { VideoCarousel } from "./components/common/VideoCarousel/VideoCarousel";
import {
  data as videoCarouselData,
  desktopData as videoCarouselDesktopData,
} from "./components/common/VideoCarousel/data";
import { LogoNavbar } from "./components/common/LogoNavbar/LogoNavbar";
import { ChooseLanguage } from "./components/common/ChooseLanguage/ChooseLanguage";

function App() {
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
      <LogoNavbar />
      <div>
        <VideoCarousel
          data={videoCarouselData}
          desktopData={videoCarouselDesktopData}
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

export default App;
