// import img from "./images/hero-bg@2x.png";
import img1 from "./images/symbol.svg";
import css from "./Banner.module.sass";

export const Banner = () => {
   return (
      <section className={css.banner}>         
         <div className={css.main}>                        
             <img className={css.img1} src={img1} alt="symbol"/>
             <h1 className={css.h1}>АРХИВ ПРЕЗИДЕНТА <br /> КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h1>
             <button className={css.btnDetail}>ПОДРОБНЕЕ ОБ АРХИВЕ</button>
         </div>
         <p className={css.p}>С ДРУГОЙ СТОРОНЫ, СУЩЕСТВУЮЩАЯ ТЕОРИЯ ПОЗВОЛЯЕТ ОЦЕНИТЬ ЗНАЧЕНИЕ 
               <br/> УКРЕПЛЕНИЯ МОРАЛЬНЫХ ЦЕННОСТЕЙ.ВНЕЗАПНО, ДЕЙСТВИЯ ПРЕДСТАВИТЕЛЕЙ</p>
         <button className={css.btnAskq}>ЗАДАТЬ ВОПРОС</button>  
      </section>
   );
};
