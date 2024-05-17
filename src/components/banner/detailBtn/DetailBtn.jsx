import { Link } from "react-router-dom";
import { ArrowRight } from "../../../assets/icons/ArrowRight";
import css from "../Banner.module.sass";

export const DetailBtn = () => {
  return (
    <section className="detail">
       <Link to="/aboutArchive">
          <button className={css.btnDetail}>ПОДРОБНЕЕ ОБ АРХИВЕ
             <ArrowRight />
          </button>
       </Link>
    </section>
  );
};