import classes from "./Header.module.sass";
import { PATH } from "../../utils/constants/Constants.js";
import { Typography } from "../../UI/Typography/Typography.jsx";
import { Container } from "../../components/container/Container.jsx";
import { ResponsiveComponent } from "../../utils/responsiveComponent/ResponsiveComponent.jsx";
import { useOutsideClick } from "../../hooks/useOutsideClick.js";
import { HeaderSelect } from "./headerSelect/HeaderSelect.jsx";
import { HeaderInput } from "./headerInput/HeaderInput.jsx";
import { LanguageList } from "./languageList/LanguageList.jsx";
import { ArrowDownSvg } from "../../UI/svgComponents/ArrowDownSvg.jsx";
import { SearchSvg } from "../../UI/svgComponents/SearchSvg.jsx";
import { MenuSvg } from "../../UI/svgComponents/MenuSvg.jsx";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import { ArrowDown } from "../../assets/icons/ArrowDown";

import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HeaderLogo } from "../../assets/logos/headerLogos/HeaderLogo.jsx";

export const Header = () => {
    const { t } = useTranslation();

    const navItems = [
        { id: 1, path: PATH.npa, label: "header&footer.nav.regulations" },
        { id: 2, path: PATH.services, label: "header&footer.nav.services" },
        { id: 3, path: PATH.faq, label: "header&footer.nav.q&a" },
        { id: 4, path: PATH.contacts, label: "header&footer.nav.contacts" },
    ];

    const [isInputVisible, setIsInputVisible] = useState(false);
    const [activeSubnav, setActiveSubnav] = useState(null);
    const [isArchiveOpenResponsive, setIsArchiveOpenResponsive] = useState(false);
    const [isMediaArchiveOpenResponsive, setIsMediaArchiveOpenResponsive] = useState(false);
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAccessibilityModeActive, setIsAccessibilityModeActive] = useState(false);
    const [isAccessibilityScriptsLoaded, setIsAccessibilityScriptsLoaded] = useState(false);

    const location = useLocation();
    const subnavRef = useRef(null);
    const headerRef = useRef(null);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    useOutsideClick(inputRef, () => setIsInputVisible(false));
    useOutsideClick(dropdownRef, () => setIsDropMenuOpen(false));
    useOutsideClick(subnavRef, () => setActiveSubnav(null));

    useEffect(() => {
        setIsInputVisible(false);
        setIsDropMenuOpen(false);
        setIsArchiveOpenResponsive(false);
        setIsMediaArchiveOpenResponsive(false);
    }, [location]);

    useEffect(() => {
        if (isDropMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isDropMenuOpen]);

    const activeLink = ({ isActive }) => (isActive ? classes.active : "");

    const toggleInputVisibility = () => {
        setIsInputVisible((prev) => !prev);
    };

    const closeInput = () => {
        setIsInputVisible((prev) => !prev);
    };

    const toggleSubnav = (menu) => {
        setActiveSubnav((prev) => prev === menu ? null : menu);
    };

    const toggleArchiveOpenResponsive = () => {
        setIsArchiveOpenResponsive((prev) => !prev);
    };

    const toggleMediaArchiveOpenResponsive = () => {
        setIsMediaArchiveOpenResponsive((prev) => !prev);
    };

    const toggleDropdown = () => {
        if (isDropMenuOpen) {
            setIsAnimating((prev) => !prev);
            setTimeout(() => {
                setIsAnimating((prev) => !prev);
                setIsDropMenuOpen((prev) => !prev);
            }, 500);
        } else {
            setIsDropMenuOpen((prev) => !prev);
        }
    };

    const isArchiveActive = () => {
        const archivePages = [PATH.aboutArchive, PATH.management];
        return archivePages.some((page) => location.pathname.includes(page));
    };

    const isMediaArchiveActive = () => {
        const archivePages = [PATH.publications, PATH.photo, PATH.video];
        return archivePages.some((page) => location.pathname.includes(page));
    };

    const toggleAccessibilityMode = () => {
        if (!isAccessibilityScriptsLoaded) {
            const loadScript = (src) => {
                return new Promise((resolve, reject) => {
                    const script = document.createElement("script");
                    script.src = src;
                    script.async = true;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.body.appendChild(script);
                });
            };

            loadScript("https://lidrekon.ru/slep/js/jquery.js").then(() => {
                return loadScript("https://lidrekon.ru/slep/js/uhpv-full.min.js");
            }).then(() => {
                if (window.UHPV) {
                    window.UHPV.init();
                }
                setIsAccessibilityScriptsLoaded(true);
                setIsAccessibilityModeActive(true);
            }).catch((error) => {
                console.error("Failed to load accessibility scripts", error);
            });

            const observer = new MutationObserver(() => {
                if (document.querySelector('#special')) {
                    headerRef.current.style.marginTop = "50px";
                } else {
                    headerRef.current.style.marginTop = "0";
                }
            });

            observer.observe(document.body, { attributes: true, childList: true, subtree: true });

            return () => observer.disconnect();
        } else {
            if (isAccessibilityModeActive && window.UHPV) {
                window.UHPV.deactivate();
                setIsAccessibilityModeActive(false);
            } else if (!isAccessibilityModeActive && window.UHPV) {
                window.UHPV.init();
                setIsAccessibilityModeActive(true);
            }
        }
    };

    return (
        <header className={classes.header} ref={headerRef}>
            <Container>
                <div className={classes.headerInner}>
                    <div className={classes.headerLogo}>
                        <ResponsiveComponent type="headerLogo" />
                        <div className={classes.headerLogoTitle}>
                            <NavLink to={PATH.main}>
                                <ResponsiveComponent type="headerTitle" />
                            </NavLink>
                        </div>
                    </div>
                    <div className={classes.rightHeader}>
                        <nav className={classes.nav}>
                            <ul className={classes.navList} ref={subnavRef}>
                                <li
                                    className={`${classes.archiveList} ${isArchiveActive() ? classes.active : ""}`}
                                    onClick={() => toggleSubnav("archive")}
                                >
                                    <Typography className={classes.parentNav} variant="h6">
                                        {t("header&footer.nav.archive")}
                                    </Typography>
                                    <ArrowDownSvg
                                        className={`${classes.arrowDownIcon} ${isArchiveActive() ? classes.active : ""}`}
                                        fill={`${isArchiveActive() ? "var(--blue400)" : "var(--black)"}`}
                                    />
                                    <ul
                                        className={`${classes.subnav} ${activeSubnav === "archive" ? classes.open : ""}`}
                                    >
                                        <li>
                                            <NavLink to={PATH.aboutArchive}>
                                                <Typography variant="h6">
                                                    {t("header&footer.subnav.aboutArchive")}
                                                </Typography>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={PATH.management}>
                                                <Typography variant="h6">
                                                    {t("header&footer.subnav.management")}
                                                </Typography>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    className={`${classes.mediaArchiveList} ${isMediaArchiveActive() ? classes.active : ""}`}
                                    onClick={() => toggleSubnav("mediaArchive")}
                                >
                                    <Typography className={classes.parentNav} variant="h6">
                                        {t("header&footer.nav.mediaArchive")}
                                    </Typography>
                                    <ArrowDownSvg
                                        className={`${classes.arrowDownIcon} ${isMediaArchiveActive() ? classes.active : ""}`}
                                        fill={`${isMediaArchiveActive() ? "var(--blue400)" : "var(--black)"}`}
                                    />
                                    <ul
                                        className={`${classes.subnav} ${activeSubnav === "mediaArchive" ? classes.open : ""}`}
                                    >
                                        <li>
                                            <NavLink to={PATH.publications}>
                                                <Typography variant="h6">
                                                    {t("header&footer.subnav.publications")}
                                                </Typography>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={PATH.photo}>
                                                <Typography variant="h6">
                                                    {t("header&footer.subnav.photo")}
                                                </Typography>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={PATH.video}>
                                                <Typography variant="h6">
                                                    {t("header&footer.subnav.video")}
                                                </Typography>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {navItems?.map((item) => (
                                    <li key={item.id}>
                                        <NavLink className={activeLink} to={item.path}>
                                            <Typography variant="h6">
                                                {t(item.label)}
                                            </Typography>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={classes.headerSelect}>
                            <HeaderSelect />
                        </div>
                        <button className={classes.eyeIcon} onClick={toggleAccessibilityMode}>
                            <img
                                id="specialButton"
                                src="/src/assets/icons/eye.svg"
                                alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
                                title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
                            />
                        </button>
                        <button
                            className={classes.searchBtn}
                            onClick={toggleInputVisibility}
                            disabled={location.pathname === "/search"}
                        >
                            <SearchSvg />
                        </button>
                        {isInputVisible && (
                            <HeaderInput
                                ref={inputRef}
                                onClose={closeInput}
                                type="search"
                                placeholder={t("header&footer.search")}
                            />
                        )}
                        <button className={classes.dropdownBtn} onClick={toggleDropdown}>
                            <MenuSvg />
                        </button>
                        {isDropMenuOpen && (
                            <div
                                ref={dropdownRef}
                                className={`${classes.headerInnerResponsive} ${isAnimating ? classes.close : ""} ${isDropMenuOpen ? classes.open : ""}`}
                            >
                                <div className={classes.responsiveHigh}>
                                    <div className={classes.headerLogoResponsive}>
                                        <HeaderLogo width={35} height={36} />
                                        <div className={classes.headerLogoTitleResponsive}>
                                            <Typography className={classes.headerLogoTitleH5} variant="h5" color="grey500">
                                                {t("header&footer.logo.archivePresidentKR")}
                                            </Typography>
                                            <Typography className={classes.headerLogoExtraSmallBody} variant="extraSmallBody" color="grey500">
                                                {t("header&footer.logo.kyrgyzRepublic")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <button className={classes.crossIcon} onClick={toggleDropdown}>
                                        <CrossIcon />
                                    </button>
                                </div>
                                <nav className={classes.responsiveNav}>
                                    <ul className={classes.responsiveList}>
                                        <li
                                            className={`${classes.accordionItem} ${isArchiveOpenResponsive ? classes.active : ""}`}
                                            onClick={() => toggleArchiveOpenResponsive()}
                                        >
                                            <Typography className={classes.parentNav} variant="h6">
                                                {t("header&footer.nav.archive")}
                                            </Typography>
                                            {isArchiveOpenResponsive
                                                ? <ArrowDown className={classes.ArrowUpSvg} />
                                                : <ArrowDown className={classes.ArrowDownSvg} />}
                                        </li>
                                        {isArchiveOpenResponsive && (
                                            <ul className={`${classes.subnav} ${isArchiveOpenResponsive ? classes.open : ""}`}>
                                                <li className={classes.subnavItem}>
                                                    <NavLink to={PATH.aboutArchive}>
                                                        <Typography variant="smallBody" color="black">
                                                            {t("header&footer.subnav.aboutArchive")}
                                                        </Typography>
                                                    </NavLink>
                                                </li>
                                                <li className={classes.subnavItem}>
                                                    <NavLink to={PATH.management}>
                                                        <Typography variant="smallBody" color="black">
                                                            {t("header&footer.subnav.management")}
                                                        </Typography>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        )}
                                        <li
                                            className={`${classes.accordionItem} ${isMediaArchiveOpenResponsive ? classes.active : ""}`}
                                            onClick={() => toggleMediaArchiveOpenResponsive()}
                                        >
                                            <Typography className={classes.parentNav} variant="h6">
                                                {t("header&footer.nav.mediaArchive")}
                                            </Typography>
                                            {isMediaArchiveOpenResponsive
                                                ? <ArrowDown className={classes.ArrowUpSvg} />
                                                : <ArrowDown className={classes.ArrowDownSvg} />}
                                        </li>
                                        {isMediaArchiveOpenResponsive && (
                                            <ul className={`${classes.subnav} ${isMediaArchiveOpenResponsive ? classes.open : ""}`}>
                                                <li className={classes.subnavItem}>
                                                    <NavLink to={PATH.publications}>
                                                        <Typography variant="smallBody" color="black">
                                                            {t("header&footer.subnav.publications")}
                                                        </Typography>
                                                    </NavLink>
                                                </li>
                                                <li className={classes.subnavItem}>
                                                    <NavLink to={PATH.photo}>
                                                        <Typography variant="smallBody" color="black">
                                                            {t("header&footer.subnav.photo")}
                                                        </Typography>
                                                    </NavLink>
                                                </li>
                                                <li className={classes.subnavItem}>
                                                    <NavLink to={PATH.video}>
                                                        <Typography variant="smallBody" color="black">
                                                            {t("header&footer.subnav.video")}
                                                        </Typography>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        )}
                                        {navItems?.map((item) => (
                                            <li key={item.id}>
                                                <NavLink className={activeLink} to={item.path}>
                                                    <Typography variant="h6" color="black">
                                                        {t(item.label)}
                                                    </Typography>
                                                </NavLink>
                                            </li>
                                        ))}
                                        <div className={classes.languageList}>
                                            <LanguageList />
                                        </div>
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
};
