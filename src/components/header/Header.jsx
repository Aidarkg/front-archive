import {NavbarList} from "../../utils/NavbarList.jsx";
import {Link} from "react-router-dom";
import s from "./Header.module.sass"

const Header = () => {
    return (
        <div className={s.container}>
           <div className={s.navbar}>
               <ul>
                   <li>
                       {
                           NavbarList.map((item) => (
                               <nav key={item.id}>
                                   <Link to={item.route}>
                                       {item.caption}
                                   </Link>
                               </nav>
                           ))
                       }
                   </li>
               </ul>
           </div>
        </div>
    );
};

export default Header;