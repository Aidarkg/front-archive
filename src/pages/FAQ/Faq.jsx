import { QuestionForm } from "./questionForm/QuestionForm.jsx";
import { Accardion } from "../../ui/Accordion/Accordion";
import { faqList } from "./scripts/AccardionMenu";
import classes from "./Faq.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {Breadcrumbs} from "../../ui/breadcrumbs/Breadcrumbs.jsx";

export const Faq = () => {
   return (
      <section>
        <div className="container">
            <Breadcrumbs currentPage={"вопросы и ответы"} />
            <div className={classes.faq}>
                <div>
                    <Accardion faqList={faqList} />
                </div>
                <div>
                    <Typography className={classes.heading} variant="h1" color="blue500" >
                        Задайте свой вопрос
                    </Typography>
                    <QuestionForm />
                </div>
            </div>
        </div>
      </section>
   );
};
