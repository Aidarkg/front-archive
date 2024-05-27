import { Typography } from "../../Typography/Typography";
import classes from "./LanguageList.module.sass";
import { useTranslation } from "react-i18next";
import { useRegulationsStore } from "../../pages/npa/store/useRegulationsStore";

export const LanguageList = () => {
    const { i18n } = useTranslation();
    const { setLanguage } = useRegulationsStore();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    const languages = [
        { code: "ru", label: "РУС" },
        { code: "ky", label: "КЫР" },
        { code: "en", label: "ENG" },
    ];


    return (
        <ul className={classes.LanguageList}>
            {languages?.map((lang) => (
                <li
                    key={lang.code}
                    className={`${classes.languageOption} ${i18n.language === lang.code ? classes.active : ""}`}
                    onClick={() => changeLanguage(lang.code)}
                >
                    <Typography variant="h6">
                        {lang.label}
                    </Typography>
                </li>
            ))}
        </ul>
    );
};


