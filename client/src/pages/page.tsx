import { ChooseCup } from "../components/common/ChooseCup/ChooseCup";
import { ThreeButtons } from "../components/common/ThreeButtons/ThreeButtons";
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
        />
        <div className="w-full h-[500px] bg-maxbeige z-10">
          <div className="bg-maxbeige flex flex-col items-center px-2 md:px-0">
            <div className="md:hidden w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent translate-y-[-100%] border-b-maxbeige"></div>
            <ThreeButtons className="relative md:translate-y-[-50%]" />
            <div className="mt-10 md:mt-0 flex flex-col gap-15 md:translate-y-[-20%]">
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
