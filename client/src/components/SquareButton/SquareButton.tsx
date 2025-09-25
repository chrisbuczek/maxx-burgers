import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";

interface ISquareButton {
  children: React.ReactNode;
  className?: string | "";
}

export const SquareButton: React.FC<ISquareButton> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`bg-transparent border-3 border-maxred text-maxred rounded-[0.5rem] w-22 h-22 flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export const SquareButtonBack = () => {
  const { t } = useTranslation();
  return (
    <SquareButton>
      <IoIosArrowBack size={30} />
      {t("back")}
    </SquareButton>
  );
};
