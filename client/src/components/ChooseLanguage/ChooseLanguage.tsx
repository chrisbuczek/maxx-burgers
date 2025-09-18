import { useTranslation } from "react-i18next";

export const ChooseLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="flex flex-row justify-center items-center gap-3.5">
      <img
        src={"poland.svg"}
        width={20}
        height={20}
        alt="poland flag"
        aria-label="poland flag"
        className="rounded-full shadow-2xl shadow-black"
      />
      <div>{t("poland")}</div>
      <div className="h-6 border-l border-gray-300"></div>
      <button
        onClick={() => changeLanguage("en")}
        className={`cursor-pointer ${
          currentLanguage === "en" ? "text-maxred" : ""
        }`}
      >
        {t("english")}
      </button>
      <button
        onClick={() => changeLanguage("pl")}
        className={`cursor-pointer ${
          currentLanguage === "pl" ? "text-maxred" : ""
        }`}
      >
        {t("polski")}
      </button>
    </div>
  );
};
