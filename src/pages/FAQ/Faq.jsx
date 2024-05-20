import { QuestionForm } from "./questionForm/QuestionForm.jsx";
// import { Accardion } from "../../ui/Accordion/Accordion";
// import { faqList } from "./scripts/AccardionMenu";
import s from "./Faq.module.sass";

export const Faq = () => {
   return (
      <section>
        <div className="container">
            <div className={s.faq}>
                {/*<Accardion faqList={faqList} />*/}
                <QuestionForm />
            </div>
        </div>
      </section>
   );
};
