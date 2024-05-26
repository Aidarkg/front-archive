import { QuestionForm } from "../../UI/questionForm/QuestionForm.jsx";
import { Accardion } from "../../UI/Accordion/Accordion";
import { faqList } from "./scripts/AccardionMenu";
import classes from "./Faq.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
// import {ManagementMore} from "../managementMore/ManagementMore.jsx";

export const Faq = () => {
   return (
      <section>
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
      </section>
   );
};
