import classes from "./Faq.module.sass";

import { QuestionForm } from "../../UI/questionForm/QuestionForm.jsx";
import { Accardion } from "../../UI/Accordion/Accordion";
import { faqList } from "./scripts/AccardionMenu";

import {Typography} from "../../Typography/Typography.jsx";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";

import { t } from "i18next";
import {Container} from "../../components/container/Container.jsx";

export const Faq = () => {
   return (
      <section>
          <Container>
              <Breadcrumbs currentPage={"вопросы и ответы"} />
              <div className={classes.faq}>
                  <div>
                      <Accardion faqList={faqList} />
                  </div>
                  <div>
                      <Typography
                          className={classes.heading}
                          variant="h1"
                          color="blue500"
                      >
                          {t("faq")}
                      </Typography>
                      <QuestionForm />
                  </div>
              </div>
          </Container>
      </section>
   );
};
