import React from "react";

const data = [
  { id: 1, fileName: "video0.mp4" },
  { id: 2, fileName: "video1.mp4" },
  { id: 3, fileName: "video2.mp4" },
];

interface IVideoCarousel {
  data: { fileName: string }[];
}

export const VideoCarousel: React.FC<IVideoCarousel[]> = () => {
  return (
    <div>
      {data.map((item) => (
        <video src={`/${item.fileName}`} key={item.id}></video>
      ))}
    </div>
  );
};
