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
    <div className={"flex flex-row gap-2 " + className}>
      {data.map(({ textKey, icon, position, link, id }) => (
        <SquareButton key={id} position={position as position}>
          <Link to={link}>
            <div className="flex flex-col gap-1 items-center">
              <img
                className="max-h-8"
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
        `bg-maxgreen text-maxbeige py-4 px-14 max-h-[100px] ${
          position === "left" && "rounded-l-4xl"
        } ${position === "right" && "rounded-r-4xl"}` + className
      }
    >
      {children}
    </button>
  );
};
