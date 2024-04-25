import { NavbarList } from "../../utils/NavbarList.jsx";
import { Link } from "react-router-dom";
import s from "./Header.module.sass";

export const Header = () => {
   return (
      <section className={s.container}>
         <header className={s.navbar}>
            <ul>
               <li>
                  {NavbarList.map(item => (
                     <Link to={item.route} key={item.id}>
                        {item.caption}
                     </Link>
                  ))}
               </li>
            </ul>
         </header>
      </section>
   );
};
