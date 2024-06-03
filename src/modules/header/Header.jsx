import classes from "./Header.module.sass";

import { PATH } from "../../app/Routes/index.js";

import { Typography } from "../../Typography/Typography.jsx";

import { Container } from "../../components/container/Container.jsx";

import { ResponsiveHeaderLogo } from "../../utils/responsiveHeaderLogo/ResponsiveHeaderLogo.jsx";
import { ResponsiveHeaderLogoTitle } from "../../utils/responsiveHeaderLogo/ResponsiveHeaderLogoTitle.jsx";

import { HeaderSelect } from "../../UI";
import { HeaderInput } from "../../UI/headerInput/HeaderInput.jsx";
import { LanguageList } from "../../UI/languageList/LanguageList.jsx";

import { ArrowDownSvg } from "../../UI/Svg/ArrowDownSvg.jsx";
import { AccessibilitySvg } from "../../UI/Svg/AccessibilitySvg.jsx";
import { SearchSvg } from "../../UI/Svg/SearchSvg.jsx";
import { MenuSvg } from "../../UI/Svg/MenuSvg.jsx";

import { CrossIcon } from "../../assets/icons/CrossIcon";
import { ArrowDown } from "../../assets/icons/ArrowDown";

import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HeaderLogoMobile } from "../../assets/logos/headerLogos/HeaderLogoMobile.jsx";

export const Header = () => {
   const { t } = useTranslation();

   const [isInputVisible, setIsInputVisible] = useState(false);
   const [activeSubnav, setActiveSubnav] = useState(null);
   const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);
   const [isAccessibilityModeActive, setIsAccessibilityModeActive] = useState(false);

   const location = useLocation();

   const archiveRef = useRef(null);
   const mediaArchiveRef = useRef(null);
   const headerRef = useRef(null);

   useEffect(() => {
      closeInput();
   }, [location]);

   const activeLink = ({ isActive }) => (isActive ? classes.active : "");

   const toggleInputVisibility = () => {
      setIsInputVisible((prev) => !prev);
   };

   const closeInput = () => {
      setIsInputVisible(false);
   };

   const toggleSubnav = (menu) => {
      setActiveSubnav((prev) => prev === menu ? null : menu);
   };

   const toggleDropdown = () => {
      setIsDropMenuOpen((prev) => !prev);
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
      setIsAccessibilityModeActive(!isAccessibilityModeActive);
   };

   useEffect(() => {
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

      // loadScript("https://lidrekon.ru/slep/js/jquery.js").then(() => {
      //    return loadScript("https://lidrekon.ru/slep/js/uhpv-full.min.js");
      // });

      const observer = new MutationObserver(() => {
         if (document.querySelector('#special')) {
            headerRef.current.style.marginTop = "50px";
         } else {
            headerRef.current.style.marginTop = "0";
         }
      });

      observer.observe(document.body, { attributes: true, childList: true, subtree: true });

      return () => observer.disconnect();
   }, []);


   return (
      <header className={classes.header} ref={headerRef}>
         <Container>
            <div className={classes.headerInner}>
               <div className={classes.headerLogo}>
                  <ResponsiveHeaderLogo />
                  <div className={classes.headerLogoTitle}>
                     <ResponsiveHeaderLogoTitle />
                  </div>
               </div>
               <div className={classes.rightHeader}>
                  <nav className={classes.nav}>
                     <ul className={classes.navList}>
                        <li
                           className={`
                              ${classes.archiveList} 
                              ${isArchiveActive() ? classes.active : ""}
                           `}
                           onClick={() => toggleSubnav("archive")}
                           ref={archiveRef}
                        >
                           <Typography
                              className={classes.parentNav}
                              variant="h6"
                           >
                              {t("header&footer.nav.archive")}
                           </Typography>
                           <ArrowDownSvg />
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
                           className={`
                                 ${classes.mediaArchiveList} 
                                 ${isMediaArchiveActive() ? classes.active : ""}
                              `}
                           onClick={() => toggleSubnav("mediaArchive")}
                           ref={mediaArchiveRef}
                        >
                           <Typography
                              className={classes.parentNav}
                              variant="h6"
                           >
                              {t("header&footer.nav.mediaArchive")}
                           </Typography>
                           <ArrowDownSvg />
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
                        <li>
                           <NavLink className={activeLink} to={PATH.npa}>
                              <Typography variant="h6">
                                 {t("header&footer.nav.regulations")}
                              </Typography>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink className={activeLink} to={PATH.services}>
                              <Typography variant="h6">
                                 {t("header&footer.nav.services")}
                              </Typography>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink className={activeLink} to={PATH.faq}>
                              <Typography variant="h6">
                                 {t("header&footer.nav.q&a")}
                              </Typography>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink className={activeLink} to={PATH.contacts}>
                              <Typography variant="h6">
                                 {t("header&footer.nav.contacts")}
                              </Typography>
                           </NavLink>
                        </li>
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
                  >
                     <SearchSvg />
                  </button>
                  {isInputVisible && (
                     <HeaderInput
                        onClose={closeInput}
                        type="search"
                        placeholder={t("header&footer.search")}
                     />
                  )}
                  <button className={classes.dropdownBtn} onClick={toggleDropdown}>
                     <MenuSvg />
                  </button>
                  {isDropMenuOpen && (
                     <div className={`${classes.headerInnerResponsive} ${isDropMenuOpen ? classes.open : ""}`}>
                        <div className={classes.responsiveHigh}>
                           <div className={classes.headerLogoResponsive}>
                              <HeaderLogoMobile />
                              <div className={classes.headerLogoTitleResponsive}>
                                 <Typography className={classes.headerLogoTitleH5} variant="h5" color="grey500">
                                    {t("header&footer.logo.archivePresidentKR")}
                                 </Typography>
                                 <Typography className={classes.headerLogoExtraSmallBody} variant="extraSmallBody" color="grey500">
                                    {t("header&footer.logo.kyrgyzRepublic")}
                                 </Typography>
                              </div>
                           </div>
                           <div className={classes.responsiveIcons}>
                              <button className={classes.eyeIcon}>
                                 <AccessibilitySvg />
                              </button>
                              <button className={classes.crossIcon} onClick={toggleDropdown}>
                                 <CrossIcon />
                              </button>
                           </div>
                        </div>
                        <nav className={classes.responsiveNav}>
                           <ul className={classes.responsiveList}>
                              <li
                                 className={`${classes.accordionItem} ${activeSubnav === "archive" ? classes.active : ""}`}
                                 onClick={() => toggleSubnav("archive")}
                              >
                                 <Typography className={classes.parentNav} variant="h6">
                                    {t("header&footer.nav.archive")}
                                 </Typography>
                                 {activeSubnav === "archive"
                                    ? <ArrowDown className={classes.ArrowUpSvg} />
                                    : <ArrowDown className={classes.ArrowDownSvg} />}
                              </li>
                              {activeSubnav === "archive" && (
                                 <ul className={`${classes.subnav} ${activeSubnav === "archive" ? classes.open : ""}`}>
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
                                 className={`${classes.accordionItem} ${activeSubnav === "mediaArchive" ? classes.active : ""}`}
                                 onClick={() => toggleSubnav("mediaArchive")}
                              >
                                 <Typography className={classes.parentNav} variant="h6">
                                    {t("header&footer.nav.mediaArchive")}
                                 </Typography>
                                 {activeSubnav === "mediaArchive"
                                    ? <ArrowDown className={classes.ArrowUpSvg} />
                                    : <ArrowDown className={classes.ArrowDownSvg} />}
                              </li>
                              {activeSubnav === "mediaArchive" && (
                                 <ul className={`${classes.subnav} ${activeSubnav === "mediaArchive" ? classes.open : ""}`}>
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
                              <li>
                                 <NavLink to={PATH.npa}>
                                    <Typography variant="h6" color="black">
                                       {t("header&footer.nav.regulations")}
                                    </Typography>
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink to={PATH.services}>
                                    <Typography variant="h6" color="black">
                                       {t("header&footer.nav.services")}
                                    </Typography>
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink to={PATH.services}>
                                    <Typography variant="h6" color="black">
                                       {t("header&footer.nav.q&a")}
                                    </Typography>
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink to={PATH.contacts}>
                                    <Typography variant="h6" color="black">
                                       {t("header&footer.nav.contacts")}
                                    </Typography>
                                 </NavLink>
                              </li>
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

//FIX ME замапить все что можно
