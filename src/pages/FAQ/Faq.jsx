import { Accardion } from "../../ui/Accordion/Accordion";
import { faqList } from "./scripts/AccardionMenu";

export const Faq = () => {
   return (
      <section className="container">
         <Accardion faqList={faqList} />
      </section>
   );
};
