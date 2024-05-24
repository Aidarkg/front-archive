import classes from "./Footer.module.sass";
import coat_of_arms from "../header/webp/symbol.webp";
import {NavLink} from "react-router-dom";
import {Typography} from "../../Typography/Typography.jsx";
import { useTranslation } from "react-i18next";
export const Footer = () => {
    const { t } = useTranslation();
   return (
       <footer className={classes.footer}>
           <div className="container">
               <div className={classes.footerContent}>
                   <div className={classes.footerLogo} >
                       <div>
                           <img src={coat_of_arms} alt="Coat of arms" />
                       </div>
                       <div className={classes.footerLogoText}>
                           <NavLink to={"/"}>
                               <Typography variant="h3" color="main">
                                   АРХИВ ПРЕЗИДЕНТА
                               </Typography>
                               <Typography variant="body" color="main">
                                   КЫРГЫЗСКОЙ РЕСПУБЛИКИ
                               </Typography>
                           </NavLink>
                       </div>
                   </div>
                   <nav className={classes.nav}>
                       <ul className={classes.navList}>
                           <li>
                               <NavLink to={'/'}>
                                   <Typography variant="h6">
                                       Главная
                                   </Typography>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to={'/aboutArchive'}>
                                   <Typography variant="h6">
                                       {t("header&footer.subnav.aboutArchive")}
                                   </Typography>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to={'/management'}>
                                   <Typography variant="h6">
                                       {t("header&footer.subnav.management")}
                                   </Typography>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to={'/photo'}>
                                   <Typography variant="h6">
                                       {t("header&footer.subnav.photo")}
                                   </Typography>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to={'/video'}>
                                   <Typography variant="h6">
                                       {t("header&footer.subnav.video")}
                                   </Typography>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to={'/regulations'}>
                                   <Typography variant="h6">
                                       {t("header&footer.nav.regulations")}
                                   </Typography>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to={'/services'}>
                                   <Typography variant="h6">
                                       {t("header&footer.nav.services")}
                                   </Typography>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to={'/faq'}>
                                   <Typography variant="h6">
                                       {t("header&footer.nav.q&a")}
                                   </Typography>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink  to={"/contacts"}>
                                   <Typography variant="h6">
                                       {t("header&footer.nav.contacts")}
                                   </Typography>
                               </NavLink>
                           </li>
                       </ul>
                   </nav>
               </div>
           </div>
       </footer>
   );
};
