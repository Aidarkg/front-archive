import styles from "./Npa.module.sass";

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
      <section className={styles.regulations}>
         <div className="container">
            <Breadcrumbs currentPage={t("regulationsPage.currentPage")} />
            <Typography className={styles.heading} variant="h1" color="blue500" >
               {t("regulationsPage.currentPage")}
            </Typography>
            <div className={styles.table}>
               <ul className={styles.headings}>
                  <li className={styles.headingDate} >
                     <Typography variant="h6" color="grey500">
                        {t("regulationsPage.tableHeadings.date")}
                     </Typography>
                  </li>
                  <li className={styles.headingNumberDoc}>
                     <Typography variant="h6" color="grey500">
                        {t("regulationsPage.tableHeadings.documentNumber")}
                     </Typography>
                  </li>
                  <li className={styles.headingName}>
                     <Typography variant="h6" color="grey500">
                        {t("regulationsPage.tableHeadings.name")}
                     </Typography>
                  </li>
               </ul>
               <ul className={styles.documentsContainer}>
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
