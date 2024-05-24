import classes from "./Footer.module.sass";
import coat_of_arms from "../header/webp/symbol.webp";
import {NavLink} from "react-router-dom";
import {Typography} from "../../Typography/Typography.jsx";
export const Footer = () => {
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
               </div>
           </div>
       </footer>
   );
};
