import classes from "./Breadcrumbs.module.sass";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Typography } from "../../Typography/Typography.jsx";

import { ArrowRightSvg } from "../../UI/Svg/ArrowRightSvg.jsx";


export const Breadcrumbs = ({ currentPage, parentPageLink, currentPageId, className }) => {

    const { t } = useTranslation();

    const crumbs = [];

    crumbs.push(
        <li key="main">
            <NavLink to={"/"}>
                <Typography variant="h6" color="blue300" >
                    {t("main")}
                </Typography>
            </NavLink>
        </li>
    );

    crumbs.push(
        <li key="icon1">
            <ArrowRightSvg />
        </li>
    );

    if (currentPage && parentPageLink) {
        crumbs.push(
            <li key="currentLink">
                <NavLink to={parentPageLink}>
                    <Typography className={classes.breadCrumbTitle} variant="h6" color="blue300" >
                        {currentPage}
                    </Typography>
                </NavLink>
            </li>
        );

        crumbs.push(
            <li key="icon2">
                <ArrowRightSvg />
            </li>
        );

        crumbs.push(
            <li key="currentTitle">
                <Typography className={classes.breadCrumbTitle} variant="h6" color="blue500" >
                    {currentPageId}
                </Typography>
            </li>
        );

    } else if (currentPage) {
        crumbs.push(
            <li key="currentTitle">
                <Typography className={classes.breadCrumbTitle} variant="h6" color="blue500" >
                    {currentPage}
                </Typography>
            </li>
        );
    }

    return <ul className={`${classes.breadCrumbList} ${className}`}>{crumbs}</ul>;

};


