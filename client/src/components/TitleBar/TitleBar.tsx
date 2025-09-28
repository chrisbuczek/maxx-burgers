import React from "react";
import { useTranslation } from "react-i18next";

const TitleBar = () => {
  const { t } = useTranslation();
  return (
    <div className="border-b-4 border-maxgreen">{t("selectRestaurant")}</div>
  );
};

export default TitleBar;
