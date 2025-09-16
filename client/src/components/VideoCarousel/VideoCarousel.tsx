import React, { useEffect, useState } from "react";

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
  loop = false,
  muted = false,
  controls = true,
}) => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlideId((prev) => {
        return prev >= desktopData.length ? 1 : prev + 1;
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlideId, desktopData.length]);

  return (
    <div className={className}>
      <div className="md:hidden">
        {data.map((item) => (
          <video
            key={item.id}
            src={`/${item.fileName}`}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            controls={controls}
            className={`max-w-full h-auto absolute ${
              item.id !== currentSlideId && "hidden"
            }`}
          />
        ))}
      </div>
      <div className="hidden md:block relative">
        {desktopData.map((item) => (
          <img
            key={item.id}
            src={`/${item.fileName}`}
            className={`max-w-full h-auto absolute ${
              item.id !== currentSlideId && "hidden"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
