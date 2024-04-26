import { NavLink } from "react-router-dom";
import s from "./Header.module.sass";
import { NavbarList } from "../../utils/NavbarList";

export const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.header__inner}>
            <span className={s.header__logo}>
               <h3>АРХИВ ПРЕЗИДЕНТА</h3>
               <h6>КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h6>
            </span>
            <nav>
               <ul className={s.header__nav_list}>
                  {NavbarList.map(item => (
                     <li key={item.id}>
                        <NavLink to={item.route}>
                           {item.caption}
                        </NavLink>
                     </li>
                  )).slice(0, 5)}
               </ul>
            </nav>
            <ul className={s.header__languages_list}>
               <li>РУС</li>
               <li>КЫР</li>
               <li>ENG</li>
            </ul>
            <input className={s.header__input} type="search" placeholder="Поиск по сайту" />
         </div>
      </header>
   );
};




{/* <section className={s.container}>
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
</section> */}
