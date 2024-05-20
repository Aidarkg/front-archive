import { useState } from "react";
import css from "./Accordion.module.sass";
import { Typography } from "../../Typography/Typography";
import { AccordionItem } from "./AccordionItem";

export const Accardion = ({ faqList = [] }) => {
   const [openId, setId] = useState(null);

   return (
      <section style={{ flexDirection: "column" }}>
         <Typography className={css.nameFaq} variant="h1" color="blue500">
            Вопросы и ответы
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
