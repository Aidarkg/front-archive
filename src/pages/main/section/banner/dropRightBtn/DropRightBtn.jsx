import { Link } from "react-router-dom";
import css from "../Banner.module.sass";

export const DropRightBtn = () => {
  return (
    <section className="dropdown">
       <button className={css.btnAskq}>ЗАДАТЬ ВОПРОС</button>
       <div className="dropdown-content">
          <Link>Go to About Archive</Link>
       </div>
    </section>
  );
};