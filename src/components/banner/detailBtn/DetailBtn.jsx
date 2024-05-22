import { Link } from "react-router-dom";
import css from "../Banner.module.sass";
import iconimg from "../images/arrow-right.svg";

export const DetailBtn = () => {
  return (
    <section className="detail">
       <Link to="/aboutArchive">About Archive
          <button className={css.btnDetail}>ПОДРОБНЕЕ ОБ АРХИВЕ
             <img className={css.iconImg} src={iconimg} />
          </button>
       </Link>
    </section>
  );
};