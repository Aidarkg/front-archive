import img from "./images/hero-bg@2x.png";
import img1 from "./images/symbol.svg";
import s from "./Banner.module.sass";

export const Banner = () => {
   return (
      <section className={s.banner}>
         <div>
            <img className={s.img} src={img} alt="building"/>
            <div className={s.h1img}>
                <img className={s.img1} src={img1} alt="symbol"/>
                <h1>АРХИВ ПРЕЗИДЕНТА КЫРГЫЗСКОЙ <br />РЕСПУБЛИКИ</h1>
            </div>
            <p>С ДРУГОЙ СТОРОНЫ, СУЩЕСТВУЮЩАЯ ТЕОРИЯ ПОЗВОЛЯЕТ ОЦЕНИТЬ ЗНАЧЕНИЕ 
               <br/> УКРЕПЛЕНИЯ МОРАЛЬНЫХ ЦЕННОСТЕЙ.ВНЕЗАПНО, ДЕЙСТВИЯ ПРЕДСТАВИТЕЛЕЙ</p>
            <button className={s.buttonr}>ЗАДАТЬ ВОПРОС</button>            
         </div>
      </section>
   );
};
