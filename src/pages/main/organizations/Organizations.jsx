import { Typography } from "../../../Typography/Typography";
import { SwiperOrganizations } from "./swiperOrganization/SwiperOrganizations";
import classes from "./swiperOrganization/SwiperOrganization.module.sass";
import { useTranslation } from "react-i18next";

export const Organizations = () => {
   const { t } = useTranslation();
   return (
      <section className="container">
         <div className={classes.organizationTypograph}>
            <Typography variant="h2">{t("mainPage.organization.title")}</Typography>
         </div>
         <SwiperOrganizations/>
      </section>
   );
};
