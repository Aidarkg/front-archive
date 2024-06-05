import { Link } from "react-router-dom";
import { ArrowRight } from "../../../assets/icons/ArrowRight";
import { Typography } from "../../../UI/Typography/Typography";
import classes from "../detailBtn/DetailBtn.module.sass";
import { useTranslation } from "react-i18next";

export const DetailBtn = () => {
   const { t } = useTranslation();

   return (
    <div className="detail">
       <Link to="/aboutArchive">
       <button className={classes.btn}>
          <Typography className={classes.btnDetail} variant="h6" weight="bold">
             {t("mainPage.hero.button")}
                 <ArrowRight />
          </Typography>           
       </button>
       </Link>
    </div>
  );
};