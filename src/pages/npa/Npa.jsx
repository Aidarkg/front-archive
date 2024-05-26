import classes from "./Npa.module.sass";

import { useTranslation } from "react-i18next";

import { useEffect } from "react";

import { useRegulationsStore } from "./store/useRegulationsStore";

import { Typography } from "../../Typography/Typography";

import { RegulationsDoc } from "../../UI/regulationsDoc/RegulationsDoc";

import { Container } from "../../components/container/Container";

import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs";

export const Npa = () => {
   const { t } = useTranslation();
   const { regulationsList, fetchRegulations, language } = useRegulationsStore();

   useEffect(() => {
      fetchRegulations();
   }, [fetchRegulations, language]);

   return (
      <section className={classes.regulations}>
         <Container>
            <Breadcrumbs className={classes.breadcrumbs} currentPage={t("regulationsPage.currentPage")} />
            <Typography className={classes.heading} variant="h1" color="blue500" >
               {t("regulationsPage.currentPage")}
            </Typography>
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
                  {regulationsList?.slice(0, 7)?.map((doc) => (
                     <RegulationsDoc
                        key={doc.id}
                        date="26.04.2024"
                        documentNumber="№234"
                        name={doc.title}
                        linkOpen={doc.pdf_file}
                     />
                  ))}
               </ul>
            </div>
         </Container>
      </section>
   );
};
