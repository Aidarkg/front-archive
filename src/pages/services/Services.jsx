import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";

import { useTranslation } from "react-i18next";
import { Typography } from "../../UI/Typography/Typography.jsx";
import { CustomButton } from "../../UI/customButton/CustomButton.jsx";
import { DownloadIcon } from "../../assets/icons/DownloadIcon.jsx";
import classes from "./Services.module.sass";
import { useServiceStore } from "./store/useServiceStore.jsx";
import { useEffect } from "react";
import { Loader } from "../../components/loader/Loader.jsx";

export const Services = () => {
   const { t, i18n } = useTranslation();
   const { service, loading, fetchData, downloadDocument, error } = useServiceStore();

   useEffect(() => {
      fetchData();
   }, [fetchData, i18n.language]);
   if (loading) {
      return <Loader />;
   }
   if (error) {
      return <div>error: {error}</div>;
   }


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
               onClick={downloadDocument}
            />
            {loading && <Loader />}
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
         </div>
      </section>
   );
};
