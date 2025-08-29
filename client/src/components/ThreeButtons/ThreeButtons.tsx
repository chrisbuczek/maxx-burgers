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

type position = "left" | "center" | "right";

export const ThreeButtons = ({ className = "" }: { className?: string }) => {
  return (
    <div className={"flex flex-row gap-2 " + className}>
      {data.map(({ text, icon, position, id }) => (
        <SquareButton key={id} position={position as position}>
          <div className="flex flex-col gap-1 items-center">
            <img className="max-h-8" src={icon} aria-label={text} alt={text} />
            {text}
          </div>
        </SquareButton>
      ))}
    </div>
  );
};

type SquareButton = {
  key: number | string;
  position: "left" | "center" | "right";
  children: React.ReactNode;
  className?: string;
};

const SquareButton: React.FC<SquareButton> = ({
  key,
  position,
  children,
  className = "",
}) => {
  return (
    <button
      key={key}
      className={
        `bg-maxgreen text-maxbeige py-4 px-14 max-h-[100px] ${
          position === "left" && "rounded-l-4xl"
        } ${position === "right" && "rounded-r-4xl"}` + className
      }
    >
      {children}
    </button>
  );
};
