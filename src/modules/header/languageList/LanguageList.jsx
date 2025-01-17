import classes from "./LanguageList.module.sass";

import {Typography} from "../../../UI/Typography/Typography.jsx";

import { useTranslation } from "react-i18next";

export const LanguageList = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
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


