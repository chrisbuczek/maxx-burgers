import React from "react";

export interface VideoCarouselItem {
  id: number;
  fileName: string;
}

interface VideoCarouselProps {
  data: VideoCarouselItem[];
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export const VideoCarousel: React.FC<VideoCarouselProps> = ({
  data,
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
}) => {
  return (
    <div className={className}>
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
  );
};
