import { Link } from "react-router-dom";
import { ArrowRight } from "../../../assets/icons/ArrowRight";
import { Typography } from "../../../Typography/Typography";
import classes from "../detailBtn/DetailBtn.module.sass";

export const DetailBtn = () => {
  return (
    <section className="detail">
       <Link to="/aboutArchive">
       <button className={classes.btn}>
          <Typography className={classes.btnDetail} variant="h6" weight="bold">
             ПОДРОБНЕЕ ОБ АРХИВЕ
                 <ArrowRight />
          </Typography>           
       </button>
       </Link>
    </section>
  );
};