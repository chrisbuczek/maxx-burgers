import React from "react";
import { useTranslation } from "react-i18next";

const ChooseCup = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <img
        src={"cup.avif"}
        width={40}
        height={40}
        alt="reusable cup"
        aria-label="reusable cup"
      />
      {t("chooseCup")}
    </div>
  );
};

export default ChooseCup;
