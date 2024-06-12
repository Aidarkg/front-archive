import classes from "./Banner.module.sass";
import { DetailBtn } from "./detailBtn/DetailBtn";
import { Typography } from "../../UI/Typography/Typography";
import { Container } from "../../components/container/Container";
import { useTranslation } from "react-i18next";
import symbol from "../../assets/images/symbol.webp";

export const Banner = () => {
   const { t } = useTranslation();

   return (
      <section>
         <Container>
            <div className={classes.banner}>
               <div className={classes.main}>
                  <div className={classes.img1}>
                     <img src={symbol} alt="" />
                  </div>
                  <Typography className={classes.h1} variant="h1">
                     {t("mainPage.hero.heading")}
                  </Typography>
                  <DetailBtn />
               </div>               
            </div>
         </Container>
      </section>
   );
};
