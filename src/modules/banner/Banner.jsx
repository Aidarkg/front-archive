import { Typography } from "../../UI/Typography/Typography";
import { Container } from "../../components/container/Container";
import { useTranslation } from "react-i18next";
import { useBannerStore } from "./store/store";
import { useEffect } from "react";
import { CustomButton } from "../../UI/customButton/CustomButton";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import classes from "./Banner.module.sass";

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
                  src={bannerPhoto?.logo}
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
                  <CustomButton
                     text={t("mainPage.hero.button")}
                     actionType="link"
                     to={"/aboutArchive"}
                     icon={<ArrowRight />}
                     className={classes.detailBtn}
                  />
               </div>
            </div>
         </Container>
      </section>
   );
};
