import { useEffect, useState } from "react";
import classes from "./Accordion.module.sass";
import { Typography } from "../../UI/Typography/Typography.jsx";
import { AccordionItem } from "./AccordionItem.jsx";
import { useTranslation } from "react-i18next";
import useFaqStore from "../../pages/FAQ/store/useFaqStore.jsx";

export const Accardion = () => {
   const {faqs, fetchFaqs} = useFaqStore();
   const [openId, setId] = useState(null);
   const {t, i18n} = useTranslation();

   useEffect(() => {
      fetchFaqs();
   }, [fetchFaqs, i18n.language]);

   return (
      <section>
         <Typography className={classes.nameFaq} variant="h1" color="blue500">
            {t("header&footer.nav.q&a")}
         </Typography>
         <ul className={classes.accordion}>
            {faqs.map((faqItem, id) => (
               <AccordionItem
                  onClick={() => (id === openId ? setId(null) : setId(id))}
                  faqItem={faqItem}
                  isOpen={id === openId}
                  key={id}
               />
            ))}
         </ul>
      </section>
   );
};
