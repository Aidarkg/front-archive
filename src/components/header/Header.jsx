import styles from "./Header.module.sass";
import { Typography } from "../../Typography/Typography";

import { HeaderSelect } from "../../ui/headerSelect/HeaderSelect";
import { HeaderInput } from "../../ui/headerInput/HeaderInput";

import { ArrowDownSvg } from "../../ui/Svg/ArrowDownSvg";
import { AccessibilitySvg } from "../../ui/Svg/AccessibilitySvg";
import { SearchSvg } from "../../ui/Svg/SearchSvg";

import coat_of_arms from "./webp/symbol.webp";

import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [activeSubnav, setActiveSubnav] = useState(null);
  const location = useLocation();

  const activeLink = ({ isActive }) => isActive ? styles.active : "";

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
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerLogo} >
            <div>
              <img src={coat_of_arms} alt="Coat of arms" />
            </div>
            <div className={styles.headerLogoTitle}>
              <Typography variant="h3" color="grey500">
                {t("header&footer.logo.archivePresidentKR")}
              </Typography>
              <Typography variant="body" color="grey500">
                {t("header&footer.logo.kyrgyzRepublic")}
              </Typography>
            </div>
          </div>
          <div className={styles.rightHeader}>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li
                  className={`
                      ${styles.archiveList} 
                      ${location.pathname.includes("/aboutArchive") || location.pathname.includes("/management")
                      ? styles.active : ""}
                    `}
                  onClick={() => toggleSubnav("archive")}
                >
                  <Typography className={styles.parentNav} variant="h6">
                    {t("header&footer.nav.archive")}
                  </Typography>
                  <ArrowDownSvg />
                  <ul className={`${styles.subnav} ${activeSubnav === "archive" ? styles.open : ""}`}>
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
                        ${styles.mediaArchiveList} 
                        ${location.pathname.includes("/publications") || location.pathname.includes("/photo") || location.pathname.includes("/video")
                        ? styles.active : ""}
                      `}
                  onClick={() => toggleSubnav("mediaArchive")}
                >
                  <Typography className={styles.parentNav} variant="h6">
                    {t("header&footer.nav.mediaArchive")}
                  </Typography>
                  <ArrowDownSvg />
                  <ul className={`${styles.subnav} ${activeSubnav === "mediaArchive" ? styles.open : ""}`}>
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
            <button className={styles.eyeIcon}>
              <AccessibilitySvg />
            </button>
            <button className={styles.searchBtn} onClick={toggleInputVisibility}>
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

