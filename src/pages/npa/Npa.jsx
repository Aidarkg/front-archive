import classes from "./Npa.module.sass";

import { useTranslation } from "react-i18next";

import { Typography } from "../../Typography/Typography";

import { RegulationsDoc } from "../../ui/regulationsDoc/RegulationsDoc";
import { Breadcrumbs } from "../../ui/breadcrumbs/Breadcrumbs";

const regulationsDocs = [
   {
       date: "26.04.2024",
       documentNumber: "234",
       name: "Закон о содействии занятости населения"
   },
   {
       date: "26.04.2024",
       documentNumber: "234",
       name: "Закон о содействии занятости населения"
   },
   {
       date: "26.04.2024",
       documentNumber: "234",
       name: "Закон о содействии занятости населения"
   },
   {
       date: "26.04.2024",
       documentNumber: "234",
       name: "Закон о содействии занятости населения"
   },
   {
       date: "26.04.2024",
       documentNumber: "234",
       name: "Закон о содействии занятости населения"
   },
   {
       date: "26.04.2024",
       documentNumber: "234",
       name: "Закон о содействии занятости населения"
   }, 
   {
       date: "26.04.2024",
       documentNumber: "234",
       name: "Закон о содействии занятости населения"
   }, 
];

export const Npa = () => {
   const { t } = useTranslation();

   return (
      <section className={classes.regulations}>
         <div className="container">
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
                  {regulationsDocs?.map((doc, index) => (
                     <RegulationsDoc
                        key={index}
                        date={doc.date}
                        documentNumber={doc.documentNumber}
                        name={doc.name}
                     />
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
};
