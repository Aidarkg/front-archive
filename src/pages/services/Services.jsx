import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";

import { useTranslation } from "react-i18next";
import { Typography } from "../../UI/Typography/Typography.jsx";
import { CustomButton } from "../../UI/customButton/CustomButton.jsx";
import { DownloadIcon } from "../../assets/icons/DownloadIcon.jsx";
import classes from "./Services.module.sass";
import { useServiceStore } from "./store/useServiceStore.jsx";
import { useEffect } from "react";
import { Loader } from "../../components/loader/Loader.jsx";
import { ErrorPage } from "../errorPage/ErrorPage.jsx";

export const Services = () => {
   const { t, i18n } = useTranslation();
   const {
      service,
      loading,
      fetchData,
      error,
      loadMoreService,
      nextPage,
   } = useServiceStore();
   const downloadPDF = useServiceStore((state) => state.downloadPDF);


   useEffect(() => {
      fetchData();
   }, [fetchData, i18n.language]);
   if (loading) {
      return <Loader />;
   }
   if (error) {
      return <div>error: {error}</div>;
   }
   const getMoreService = () => {
      loadMoreService(i18n.language);
   };

   return (
      <section>
         <div className="container">
            <Breadcrumbs currentPage={t("header&footer.nav.services")} />
            <Typography
               className={classes.services}
               variant="h1"
               color="blue500"
            >
               {t("header&footer.nav.services")}
            </Typography>
            <CustomButton
               buttonStyle="blue"
               type="submit"
               text={t("servicePage.button")}
               className={classes.downloadPreiList}
               icon={<DownloadIcon />}
               onClick={downloadPDF}
            />
            {loading && <Loader /> || error && <ErrorPage />}
            <div className={classes.mapCards}>
               {service?.map(({ title, id, status }) => (
                  <div className={classes.serviceCards} key={id}>
                     <Typography
                        className={classes.textServiceCards}
                        variant="h6"
                        color="grey500"
                     >
                        {title}
                     </Typography>
                     <CustomButton
                        className={classes.btnCardService}
                        text={`${status}`}
                        type="submit"
                     />
                  </div>
               ))}
            </div>
            {loading && <Loader />}
            {nextPage && (
               <CustomButton
                  onClick={getMoreService}
                  text={t("loadMore")}
               />
            )}
         </div>
      </section>
   );
};
