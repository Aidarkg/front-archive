import s from "./banner.module.sass";
import gerd from "../../images/kyrgyz_republic-removebg-preview.png";
export const Banner = () => {
   return (
      <div className={s.banner}>
         <div className={s.banner__inner}>
            <div className={s.banner__inner__img}>
               <img src={gerd}  alt=""/>
            </div>
            <div className={s.banner__inner__text}>
               <h2>Здание архива Кыргызской Республики </h2>
            </div>
         </div>
      </div>
   );
};

