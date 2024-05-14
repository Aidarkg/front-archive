import { Link } from "react-router-dom";
import css from "../Banner.module.sass";
import iconimg from "../images/arrow-right.svg";
import {ArrowRight} from "../../../assets/icons/ArrowRight.jsx";



export const DetailBtn = () => {
  return (
    <section className="detail">
       <Link to="/aboutArchive">
          <button className={css.btnDetail}>ПОДРОБНЕЕ ОБ АРХИВЕ
             <img className={css.iconImg} src={iconimg} />
          </button>
           <ArrowRight/>
       </Link>
    </section>
  );
};