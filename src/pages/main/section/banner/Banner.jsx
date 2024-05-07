// import img from "./images/hero-bg@2x.png";
import img1 from "./images/symbol.svg";
import css from "./Banner.module.sass";

export const Banner = () => {
   return (
      <section className={css.banner}>         
         <div className={css.main}>                        
             <img className={css.img1} src={img1} alt="symbol"/>
             <h1 className={css.h1}>АРХИВ ПРЕЗИДЕНТА КЫРГЫЗСКОЙ <br />РЕСПУБЛИКИ</h1>            
             <p className={css.p}>С ДРУГОЙ СТОРОНЫ, СУЩЕСТВУЮЩАЯ ТЕОРИЯ ПОЗВОЛЯЕТ ОЦЕНИТЬ ЗНАЧЕНИЕ 
               <br/> УКРЕПЛЕНИЯ МОРАЛЬНЫХ ЦЕННОСТЕЙ.ВНЕЗАПНО, ДЕЙСТВИЯ ПРЕДСТАВИТЕЛЕЙ</p>                      
         </div>
         <button className={css.button}>ЗАДАТЬ ВОПРОС</button>  
      </section>
   );
};
