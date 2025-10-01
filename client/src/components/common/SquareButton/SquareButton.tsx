import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

interface ISquareButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const SquareButton: React.FC<ISquareButton> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border-3 border-maxred text-maxred rounded-[0.5rem] w-22 h-22 flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export const SquareButtonBack = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <SquareButton className="cursor-pointer" onClick={handleGoBack}>
      <IoIosArrowBack size={30} />
      {t("back")}
    </SquareButton>
  );
};
