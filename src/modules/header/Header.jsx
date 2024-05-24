import classes from "./Header.module.sass";
import { Typography } from "../../Typography/Typography.jsx";

import {HeaderSelect} from "../../UI/headerSelect/HeaderSelect.jsx";
import { HeaderInput } from "../../UI/headerInput/HeaderInput.jsx";

import { ArrowDownSvg } from "../../UI/Svg/ArrowDownSvg.jsx";
import { AccessibilitySvg } from "../../UI/Svg/AccessibilitySvg.jsx";
import { SearchSvg } from "../../UI/Svg/SearchSvg.jsx";

import coat_of_arms from "./webp/symbol.webp";

import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [activeSubnav, setActiveSubnav] = useState(null);
  const location = useLocation();

  const activeLink = ({ isActive }) => isActive ? classes.active : "";

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  const closeInput = () => {
    setIsInputVisible(false);
  };

  const toggleSubnav = (menu) => {
    if (activeSubnav) {
      setActiveSubnav(null);
    } else {
      setActiveSubnav(menu);
    }
  };

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.headerInner}>
          <div className={classes.headerLogo} >
            <div>
              <img src={coat_of_arms} alt="Coat of arms" />
            </div>
            <div className={classes.headerLogoTitle}>
              <NavLink to={"/"}>
                <Typography variant="h3" color="grey500">
                  {t("header&footer.logo.archivePresidentKR")}
                </Typography>
                <Typography variant="body" color="grey500">
                  {t("header&footer.logo.kyrgyzRepublic")}
                </Typography>
              </NavLink>
            </div>
          </div>
          <div className={classes.rightHeader}>
            <nav className={classes.nav}>
              <ul className={classes.navList}>
                <li
                  className={`
                      ${classes.archiveList} 
                      ${location.pathname.includes("/aboutArchive") || location.pathname.includes("/management")
                      ? classes.active : ""}
                    `}
                  onClick={() => toggleSubnav("archive")}
                >
                  <Typography className={classes.parentNav} variant="h6">
                    {t("header&footer.nav.archive")}
                  </Typography>
                  <ArrowDownSvg />
                  <ul className={`${classes.subnav} ${activeSubnav === "archive" ? classes.open : ""}`}>
                    <li>
                      <NavLink to={"/aboutArchive"}>
                        <Typography variant="h6">
                          {t("header&footer.subnav.aboutArchive")}
                        </Typography>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/management"}>
                        <Typography variant="h6">
                          {t("header&footer.subnav.management")}
                        </Typography>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li
                  className={`
                        ${classes.mediaArchiveList} 
                        ${location.pathname.includes("/publications") || location.pathname.includes("/photo") || location.pathname.includes("/video")
                      ? classes.active : ""}
                      `}
                  onClick={() => toggleSubnav("mediaArchive")}
                >
                  <Typography className={classes.parentNav} variant="h6">
                    {t("header&footer.nav.mediaArchive")}
                  </Typography>
                  <ArrowDownSvg />
                  <ul className={`${classes.subnav} ${activeSubnav === "mediaArchive" ? classes.open : ""}`}>
                    <li>
                      <NavLink to={"/publications"}>
                        <Typography variant="h6">
                          {t("header&footer.subnav.publications")}
                        </Typography>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/photo"}>
                        <Typography variant="h6">
                          {t("header&footer.subnav.photo")}
                        </Typography>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/video"}>
                        <Typography variant="h6">
                          {t("header&footer.subnav.video")}
                        </Typography>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink className={activeLink} to={"/npa"}>
                    <Typography variant="h6">
                      {t("header&footer.nav.regulations")}
                    </Typography>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={activeLink} to={"/services"}>
                    <Typography variant="h6">
                      {t("header&footer.nav.services")}
                    </Typography>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={activeLink} to={"/faq"}>
                    <Typography variant="h6">
                      {t("header&footer.nav.q&a")}
                    </Typography>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={activeLink} to={"/contacts"}>
                    <Typography variant="h6">
                      {t("header&footer.nav.contacts")}
                    </Typography>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <HeaderSelect />
            <button className={classes.eyeIcon}>
              <AccessibilitySvg />
            </button>
            <button className={classes.searchBtn} onClick={toggleInputVisibility}>
              <SearchSvg />
            </button>
              {isInputVisible &&
                <HeaderInput
                  onClose={closeInput}
                  type="search"
                  placeholder={t("header&footer.search")}
                />
              }
          </div>
        </div>
      </div>
    </header>
  );
};
