import { Link } from "react-router-dom";
import { Typography } from "../../../../Typography/Typography";
import { ArrowRight } from "../../../../assets/icons/ArrowRight";
import classes from "./Btn.module.sass";

export const Btn = () => {
  return (
    <section className="detail">
       <Link to="/aboutArchive">
       <button className={classes.btn}>
          <Typography className={classes.btnDetail} variant="h6" >
             ПОДРОБНЕЕ ОБ АРХИВЕ
                 <ArrowRight />
          </Typography>           
       </button>
       </Link>
    </section>
  );
};

