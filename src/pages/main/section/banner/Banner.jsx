import img from "./images/hero-bg@2x.png";
import s from "./Banner.module.sass";

export const Banner = () => {
   return (
      <section className={s.banner}>
         <div>
            <img className={s.img} src={img} alt="building"/>
         </div>
      </section>
   );
};
