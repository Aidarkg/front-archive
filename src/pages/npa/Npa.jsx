import classes from "./Npa.module.sass";

import { useTranslation } from "react-i18next";

import { useEffect } from "react";

import { useRegulationsStore } from "./store/useRegulationsStore";

import { Typography } from "../../UI/Typography/Typography";

import { RegulationsDoc } from "../../UI/regulationsDoc/RegulationsDoc";
import { CustomButton } from "../../UI/customButton/CustomButton";

import { Container } from "../../components/container/Container";
import { Loader } from "../../components/loader/Loader";

import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs";

export const Npa = () => {
   const { t, i18n } = useTranslation();
   const { regulationsList, fetchRegulations, fetchMoreRegulations, next, loading } = useRegulationsStore();

   useEffect(() => {
      fetchRegulations();
   }, [fetchRegulations, i18n.language]);

   return (
      <section className={classes.regulations}>
         <Container>
            <Breadcrumbs className={classes.breadcrumbs} currentPage={t("regulationsPage.currentPage")} />
            <Typography className={classes.heading} variant="h1" color="blue500" >
               {t("regulationsPage.currentPage")}
            </Typography>
            <ul className={classes.headingsOutside}>
               <li className={classes.headingDate} >
                  <Typography variant="h6" color="grey500">
                     {t("regulationsPage.tableHeadings.date")}
                  </Typography>
               </li>
               <li className={classes.headingNumberDoc}>
                  <Typography variant="h6" color="grey500">
                     {t("regulationsPage.tableHeadings.documentNumber")}
                  </Typography>
               </li>
               <li className={classes.headingName}>
                  <Typography variant="h6" color="grey500">
                     {t("regulationsPage.tableHeadings.name")}
                  </Typography>
               </li>
            </ul>
            <div className={classes.table}>
               <ul className={classes.headings}>
                  <li className={classes.headingDate} >
                     <Typography variant="h6" color="grey500">
                        {t("regulationsPage.tableHeadings.date")}
                     </Typography>
                  </li>
                  <li className={classes.headingNumberDoc}>
                     <Typography variant="h6" color="grey500">
                        {t("regulationsPage.tableHeadings.documentNumber")}
                     </Typography>
                  </li>
                  <li className={classes.headingName}>
                     <Typography variant="h6" color="grey500">
                        {t("regulationsPage.tableHeadings.name")}
                     </Typography>
                  </li>
               </ul>
               <ul className={classes.documentsContainer}>
                  {loading && <Loader />}
                  {regulationsList?.map((doc) => (
                     <RegulationsDoc
                        key={doc.id}
                        // date={doc.date_file} FIX_ME неверный формат символов 26-04-2024
                        date={"26.04.2024"}
                        documentNumber={doc.document_number}
                        name={doc.title}
                        linkOpen={doc.pdf_file}
                        linkDownload={doc.pdf_file}
                     />
                  ))}
               </ul>
               {next && !loading && (
                  <CustomButton
                     text={t("loadMore")}
                     buttonStyle="withBorder"
                     onClick={fetchMoreRegulations}
                  />
               )}
            </div>
         </Container>
      </section>
   );
};
