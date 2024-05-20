import { Link } from "react-router-dom";
import { ArrowRight } from "../../../assets/icons/ArrowRight";
import css from "../Banner.module.sass";
import { Typography } from "../../../Typography/Typography";

export const DetailBtn = () => {
  return (
    <section className="detail">
       <Link to="/aboutArchive">
       <button>
          <Typography className={css.btnDetail} variant="h6" weight="bold">
             ПОДРОБНЕЕ ОБ АРХИВЕ
                 <ArrowRight />
          </Typography>           
       </button>
       </Link>
    </section>
  );
};