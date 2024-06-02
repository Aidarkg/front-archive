import classes from "./Faq.module.sass";

import { QuestionForm } from "../../UI/questionForm/QuestionForm.jsx";
import { Accardion } from "../../UI/Accordion/Accordion";

import {Typography} from "../../Typography/Typography.jsx";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";

import {Container} from "../../components/container/Container.jsx";
import { useTranslation } from "react-i18next";

export const Faq = () => {
    const {t} = useTranslation();
   return (
      <section>
          <Container>
              <Breadcrumbs currentPage={t("header&footer.nav.q&a")} />
              <div className={classes.faq}>
                  <div>
                      <Accardion />
                  </div>
                  <div>
                      <Typography
                          className={classes.heading}
                          variant="h1"
                          color="blue500"
                      >
                          {t("q&aPage.heading")}
                      </Typography>
                      <QuestionForm />
                  </div>
              </div>
          </Container>
      </section>
   );
};
