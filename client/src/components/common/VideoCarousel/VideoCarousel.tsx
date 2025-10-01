import React, { useEffect, useRef, useState } from "react";

export interface VideoCarouselItem {
  id: number;
  fileName: string;
}

interface VideoCarouselProps {
  data: VideoCarouselItem[];
  desktopData: VideoCarouselItem[];
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export const VideoCarousel: React.FC<VideoCarouselProps> = ({
  data,
  desktopData,
  className = "",
  autoPlay = true,
  loop = true,
  muted = false,
  controls = false,
}) => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [scrollY, setScrollY] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlideId((prev) => {
        return prev === desktopData.length ? 1 : prev + 1;
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlideId, desktopData.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateElementHeight = () => {
      if (videoRef.current) {
        setElementHeight(videoRef.current.offsetHeight);
      }
    };

    updateElementHeight();
    window.addEventListener("resize", updateElementHeight);

    return () => window.removeEventListener("resize", updateElementHeight);
  }, [currentSlideId]); // Re-measure when slide changes

  return (
    <>
      <div
        style={{
          height: `${elementHeight - 0.25 * elementHeight}px`,
          background: scrollY ? "gray" : "transparent",
        }}
        className="transition-all"
      ></div>
      <div ref={videoRef} className={`absolute top-0 z-[-1]`}>
        <div className="lg:hidden">
          {data.map((item) => (
            <video
              key={item.id}
              src={`/${item.fileName}`}
              autoPlay={autoPlay}
              loop={loop}
              muted={autoPlay || muted}
              controls={controls}
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className={`max-w-full h-auto w-full ${
                item.id !== currentSlideId && "hidden"
              }`}
              style={{
                pointerEvents: controls ? "auto" : "none",
              }}
            />
          ))}
        </div>
        <div className="hidden lg:block">
          {desktopData.map((item) => (
            <img
              key={item.id}
              src={`/${item.fileName}`}
              className={`max-w-full h-auto w-full ${
                item.id !== currentSlideId && "hidden"
              }`}
            />
          ))}
        </div>
        <div className={`absolute bottom-0 right-0 z-2`}>{currentSlideId}</div>
      </div>
    </>
  );
};
