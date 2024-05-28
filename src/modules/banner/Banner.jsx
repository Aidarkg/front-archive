import img1 from "./images/symbol.svg";
import classes from "./Banner.module.sass";
import { DetailBtn } from "./detailBtn/DetailBtn";
import { Typography } from "../../Typography/Typography";
import { Container } from "../../components/container/Container";
import { useTranslation } from "react-i18next";

export const Banner = () => {
   const { t } = useTranslation();

   return (
      <section className={classes.banner}>
         <Container>
            <div className={classes.main}>
               <img className={classes.img1} src={img1} alt="symbol" />
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
