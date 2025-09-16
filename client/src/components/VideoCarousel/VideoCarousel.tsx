import React from "react";

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
            className="max-w-full h-auto"
          />
        ))}
      </div>
      <div className="hidden md:block">
        {desktopData.map((item) => (
          <img
            key={item.id}
            src={`/${item.fileName}`}
            className="max-w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};
