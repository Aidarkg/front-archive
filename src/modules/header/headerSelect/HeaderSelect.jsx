import classes from "./HeaderSelect.module.sass";

import { useTranslation } from "react-i18next";

import { useRef, useState } from "react";

import { ArrowDownSvg } from "../../../UI/svgComponents/ArrowDownSvg";

import { useOutsideClick } from "../../../hooks/useOutsideClick";

export const HeaderSelect = () => {
    const { i18n } = useTranslation();
    const [activeList, setActiveList] = useState(null);
    const ref = useRef();

    useOutsideClick(ref, () => setActiveList(null));

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setActiveList(null);
    };

    const languages = [
        { code: "ru", label: "РУС" },
        { code: "ky", label: "КЫР" },
        { code: "en", label: "ENG" },
    ];

    return (
        <div ref={ref} className={classes.headerSelect}>
            <button
                type="button"
                className={classes.selectedOption}
                onClick={() => setActiveList((prev) => !prev)}
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


