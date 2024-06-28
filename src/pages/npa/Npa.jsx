import classes from "./Npa.module.sass";

import { useTranslation } from "react-i18next";

import { useEffect } from "react";

import { useRegulationsStore } from "./store/useRegulationsStore";

import { Typography } from "../../UI/Typography/Typography";

import { Container } from "../../components/container/Container";

import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs";

import { RegulationsSection } from "./regulationsSection/RegulationsSection";

export const Npa = () => {
   const { t, i18n } = useTranslation();
   const { regulationsList, fetchRegulations, fetchMoreRegulations, next, loading, error } = useRegulationsStore();

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
           <RegulationsSection
               results={regulationsList}
               nextResults={next}
               loadMore={fetchMoreRegulations}
               loading={loading}
               error={error}
               t={t}
               buttonClass={classes.btnMoreLoadResults}
           />
         </Container>
      </section>
   );
};
