import { useTranslation } from "react-i18next";
import { Typography } from "../../../UI/Typography/Typography";
import { Btn } from "../../main/mainAboutArchive/btn/Btn";
import classes from "./ContentBlocks.module.sass";
import { Container } from "../../../components/container/Container";
import { Breadcrumbs } from "../../../modules/breadcrumbs/Breadcrumbs";
import { useAboutArchive } from "./store/store";
import { useEffect } from "react";

export const ContentBlocks = ({   
   showTitle = true,
   showButton = false,
   showBreadcrumbs = true,
   limit = null,
}) => {
   const { t, i18n } = useTranslation();
   const { aboutArchive, getData } = useAboutArchive();

   useEffect(() => {
      getData();
   }, [getData, i18n.language]);
   
   const blocksToShow = limit ? aboutArchive.slice(0, limit) : aboutArchive;
   
   return (
      <section>
         <Container>
            <div className={classes.main}>
               {showBreadcrumbs && (
                  <Breadcrumbs
                     currentPage={t("header&footer.subnav.aboutArchive")}
                  />
               )}
               {showTitle && (
                  <Typography
                     className={classes.h1}
                     variant="h1"
                     color="blue500"
                  >
                     {t("header&footer.subnav.aboutArchive")}
                  </Typography>
               )}
               <div className={classes.contentInner}>
                  {blocksToShow?.map((data, index) => (
                     <div
                        key={index}
                        className={`${classes.contentBlock} ${
                           index % 2 === 0 ? classes.left : " "
                        }`}
                     >
                        <div className={index % 2 !== 0 ? "right" : "left"}>
                           <img
                              className={
                                 index % 2 !== 0
                                    ? classes.leftImage
                                    : classes.image
                              }
                              src={data.photo}
                              alt="Image"
                           />
                        </div>
                        <div className={classes.contentBlockText}>
                           <Typography className={classes.heading} variant="h2">
                              {data.title}
                           </Typography>
                           <Typography className={classes.text} variant="body">
                              {data.description}
                           </Typography>
                           {showButton && index === 0 && (
                              <div className={classes.buttonContainer}>
                                 <Btn />
                              </div>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
};
