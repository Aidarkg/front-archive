import classes from "./Header.module.sass";
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
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
   const { t } = useTranslation();

   const [isInputVisible, setIsInputVisible] = useState(false);
   const [activeSubnav, setActiveSubnav] = useState(null);
   const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

   const location = useLocation();

   const activeLink = ({ isActive }) => (isActive ? classes.active : "");

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

   const toggleDropdown = () => {
      setIsDropMenuOpen(!isDropMenuOpen);
   };


   return (
      <header className={classes.header}>
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
                              ${location.pathname.includes("/aboutArchive") || location.pathname.includes("/management")
                              ? classes.active : ""}
                           `}
                           onClick={() => toggleSubnav("archive")}
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
                  <div className={classes.headerSelect}>
                     <HeaderSelect />
                  </div>
                  <button className={classes.eyeIcon}>
                     <AccessibilitySvg />
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
                     {isDropMenuOpen ? <CrossIcon /> : <MenuSvg />}
                  </button>
                  {isDropMenuOpen && (
                     <nav className={classes.nav}>
                        <ul className={`${classes.dropdownMenu} ${isDropMenuOpen ? classes.open : ""}`}>
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
                                    <NavLink to={"/aboutArchive"}>
                                       <Typography variant="smallBody" color="black">
                                          {t("header&footer.subnav.aboutArchive")}
                                       </Typography>
                                    </NavLink>
                                 </li>
                                 <li className={classes.subnavItem}>
                                    <NavLink to={"/management"}>
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
                                    <NavLink to={"/publications"}>
                                       <Typography variant="smallBody" color="black">
                                          {t("header&footer.subnav.publications")}
                                       </Typography>
                                    </NavLink>
                                 </li>
                                 <li className={classes.subnavItem}>
                                    <NavLink to={"/photo"}>
                                       <Typography variant="smallBody" color="black">
                                          {t("header&footer.subnav.photo")}
                                       </Typography>
                                    </NavLink>
                                 </li>
                                 <li className={classes.subnavItem}>
                                    <NavLink to={"/video"}>
                                       <Typography variant="smallBody" color="black">
                                          {t("header&footer.subnav.video")}
                                       </Typography>
                                    </NavLink>
                                 </li>
                              </ul>
                           )}
                           <li>
                              <NavLink className={activeLink} to={"/npa"}>
                                 <Typography variant="h6" color="black">
                                    {t("header&footer.nav.regulations")}
                                 </Typography>
                              </NavLink>
                           </li>
                           <li>
                              <NavLink className={activeLink} to={"/services"}>
                                 <Typography variant="h6" color="black">
                                    {t("header&footer.nav.services")}
                                 </Typography>
                              </NavLink>
                           </li>
                           <li>
                              <NavLink className={activeLink} to={"/faq"}>
                                 <Typography variant="h6" color="black">
                                    {t("header&footer.nav.q&a")}
                                 </Typography>
                              </NavLink>
                           </li>
                           <li>
                              <NavLink className={activeLink} to={"/contacts"}>
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
                  )}
               </div>
            </div>
         </Container>
      </header>
   );
};

//FIX ME замапить все что можно
