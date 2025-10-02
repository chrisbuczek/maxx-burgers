import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const data = [
  {
    id: 1,
    icon: "/threebuttons1.png",
    textKey: "eatAtMax",
    position: "left",
    link: "/restaurants",
  },
  {
    id: 2,
    icon: "/threebuttons2.png",
    textKey: "takeaway",
    position: "center",
    link: "/restaurants",
  },
  {
    id: 3,
    icon: "/threebuttons3.png",
    textKey: "delivery",
    position: "right",
    link: "/restaurants",
  },
];

type position = "left" | "center" | "right";

export const ThreeButtons = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div
      className={"flex flex-row gap-2 w-[100%] md:w-[35%] lg:w-1/3" + className}
    >
      {data.map(({ textKey, icon, position, link, id }) => (
        <SquareButton key={id} position={position as position}>
          <Link to={link}>
            <div className="flex flex-col w-full gap-1 items-center text-[1.1rem]">
              <img
                className="max-h-10"
                src={icon}
                aria-label={t(textKey)}
                alt={t(textKey)}
              />
              {t(textKey)}
            </div>
          </Link>
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
        `bg-maxgreen text-maxbeige w-auto h-[7.5rem] cursor-pointer flex-1 rounded-[0.188rem] ${
          position === "left" && "rounded-l-[0.625rem]"
        } ${position === "right" && "rounded-r-[0.625rem]"} ` + className
      }
    >
      {children}
    </button>
  );
};
