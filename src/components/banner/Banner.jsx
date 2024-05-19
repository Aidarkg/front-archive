import img1 from "./images/symbol.svg";
import css from "./Banner.module.sass";
import { DetailBtn } from "./detailBtn/DetailBtn";

export const Banner = () => {
   return (
      <section className={css.banner}>         
         <div className={css.main}>                        
             <img className={css.img1} src={img1} alt="symbol"/>
             <h1 className={css.h1}>АРХИВ ПРЕЗИДЕНТА <br /> КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h1>             
             <DetailBtn />
         </div>
         <p className={css.p}>С ДРУГОЙ СТОРОНЫ, СУЩЕСТВУЮЩАЯ ТЕОРИЯ ПОЗВОЛЯЕТ ОЦЕНИТЬ ЗНАЧЕНИЕ 
               <br/> УКРЕПЛЕНИЯ МОРАЛЬНЫХ ЦЕННОСТЕЙ.ВНЕЗАПНО, ДЕЙСТВИЯ ПРЕДСТАВИТЕЛЕЙ</p>                    
      </section>
   );
};
