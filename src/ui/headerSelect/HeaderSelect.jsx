import { useTranslation } from "react-i18next";
import classes from "./HeaderSelect.module.sass";
import { useState } from "react";
import { ArrowDownSvg } from "../Svg/ArrowDownSvg";

export const HeaderSelect = () => {
    const { i18n } = useTranslation();
    const [activeList, setActiveList] = useState(null);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        toggleSelect(null);
    };

    const languages = [
        { code: "ru", label: "РУС" },
        { code: "kg", label: "КЫР" },
        { code: "en", label: "ENG" },
    ];

    const toggleSelect = (menu) => {
        if (activeList) {
            setActiveList(null);
        } else {
            setActiveList(menu);
        }
    };

    return (
        <div className={classes.headerSelect}>
            <button
                type="button"
                className={classes.selectedOption}
                onClick={toggleSelect}
            >
                {languages.find((lang) => lang.code === i18n.language)?.label}
                <ArrowDownSvg className={classes.ArrowDownSvg} />
            </button>
            <ul className={`${classes.optionList} ${activeList ? classes.open : ""}`}>
                {languages
                    ?.filter((lang) => lang.code !== i18n.language)
                    ?.map((lang) => (
                        <li
                            key={lang.code}
                            className={classes.languageOption}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            {lang.label}
                        </li>
                    ))}
            </ul>
        </div>
    );
};


