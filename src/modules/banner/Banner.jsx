import classes from "./Banner.module.sass";
import { DetailBtn } from "./detailBtn/DetailBtn";
import { Typography } from "../../UI/Typography/Typography";
import { Container } from "../../components/container/Container";
import { useTranslation } from "react-i18next";
import { useBannerStore } from "./store/store";
import { useEffect } from "react";

export const Banner = () => {
   const { t } = useTranslation();
   const { bannerPhoto, getData, getEmblem, emblem } = useBannerStore();

   useEffect(() => {
      getData();
      getEmblem();
   }, [getData, getEmblem]);

   return (
      <section>
         <Container>
            <div className={classes.banner}>
               <img
                  className={classes.bannerImg}
                  src={bannerPhoto?.[0]?.logo}
                  alt="banner"
               />
               <div className={classes.main}>                  
                  <img
                     className={classes.emblemImg}
                     src={emblem?.[0]?.emblem}
                     alt="emblem"
                  />                  
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
