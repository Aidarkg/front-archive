import { useState } from "react";
import css from "./Accordion.module.sass";
import { Typography } from "../../Typography/Typography";
import { AccordionItem } from "./AccordionItem";
import { useTranslation } from "react-i18next";

export const Accardion = ({ faqList = [] }) => {
   const [openId, setId] = useState(null);
   const {t} = useTranslation();

   return (
      <section>
         <Typography className={css.nameFaq} variant="h1" color="blue500">
            {t("mainPage.organization.title")}
         </Typography>
         <ul className={css.accordion}>
            {faqList.map((faqItem, id) => {
               return (
                  <AccordionItem
                     onClick={() => (id === openId ? setId(null) : setId(id))}
                     faqItem={faqItem}
                     isOpen={id === openId}
                     key={id}
                  />
               );
            })}
         </ul>
      </section>
   );
};
