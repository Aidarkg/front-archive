import classes from "./Banner.module.sass";
import { DetailBtn } from "./detailBtn/DetailBtn";
import { Typography } from "../../Typography/Typography";
import { Container } from "../../components/container/Container";
import { useTranslation } from "react-i18next";
import {CoatOfArms} from "../../assets/icons/CoatOfArms.jsx";

export const Banner = () => {
   const { t } = useTranslation();

   return (
      <section className={classes.banner}>
         <Container>
            <div className={classes.main}>
              <div className={classes.img1}>
                 <CoatOfArms/>
              </div>
               <Typography className={classes.h1} variant="h1">
                  {t("mainPage.hero.heading")}
               </Typography>
               <DetailBtn />
            </div>
            <Typography className={classes.p} variant="p">
               {t("mainPage.hero.subheading")}
            </Typography>
         </Container>
      </section>
   );
};
