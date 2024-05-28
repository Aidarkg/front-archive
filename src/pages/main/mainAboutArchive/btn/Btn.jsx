import { Link } from "react-router-dom";
import { Typography } from "../../../../Typography/Typography";
import { ArrowRight } from "../../../../assets/icons/ArrowRight";
import classes from "./Btn.module.sass";
import { useTranslation } from "react-i18next";

export const Btn = () => {
   const { t } = useTranslation();

   return (
    <div className="detail">
       <Link to="/aboutArchive">
       <button className={classes.btn}>
          <Typography className={classes.btnDetail} variant="h6" >
             {t("mainPage.about.button")}
                 <ArrowRight />
          </Typography>           
       </button>
       </Link>
    </div>
  );
};

