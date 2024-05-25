import { Typography } from "../../../Typography/Typography";
import { SwiperOrganizations } from "./swiperOrganization/SwiperOrganizations";
import classes from "./swiperOrganization/SwiperOrganization.module.sass";

export const Organizations = () => {
   return (
      <section className="container">
         <div className={classes.organizationTypograph}>
            <Typography variant="h2">Организации</Typography>
         </div>
         <SwiperOrganizations/>
      </section>
   );
};
