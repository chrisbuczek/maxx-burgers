import React from "react";

const data = [
  {
    id: 1,
    icon: "/threebuttons1.png",
    text: "Zjem w MAX",
    position: "left",
  },
  {
    id: 2,
    icon: "/threebuttons2.png",
    text: "Na wynos",
    position: "center",
  },
  {
    id: 3,
    icon: "/threebuttons3.png",
    text: "Dostawa",
    position: "right",
  },
];

export const ThreeButtons = () => {
  return (
    <div className="flex flex-row gap-2">
      {data.map(({ text, icon, position, id }) => (
        <SquareButton key={id} icon={icon} altText={text} position={position}>
          {text}
        </SquareButton>
      ))}
    </div>
  );
};

type SquareButton = {
  icon: string;
  key: number | string;
  altText: string;
  position: "left" | "center" | "right";
  children: React.ReactNode;
};

const SquareButton: React.FC<SquareButton> = ({
  icon,
  key,
  altText,
  position,
  children,
}) => {
  return (
    <button
      key={key}
      className={`bg-maxgreen py-4 px-14 ${
        position === "left" && "rounded-l-4xl"
      } ${position === "right" && "rounded-r-4xl"}`}
    >
      <img src={icon} alt={altText} />
      <div className="text-maxbeige">{children}</div>
    </button>
  );
};
