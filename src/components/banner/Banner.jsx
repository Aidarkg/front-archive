import img1 from "./images/symbol.svg";
import css from "./Banner.module.sass";
import { DetailBtn } from "./detailBtn/DetailBtn";
import { Typography } from "../../Typography/Typography";

export const Banner = () => {
   return (
      <section className={css.banner}>         
         <div className={css.main}>                        
             <img className={css.img1} src={img1} alt="symbol"/>             
             <Typography className={css.h1} variant="h1">
                   АРХИВ ПРЕЗИДЕНТА <br /> КЫРГЫЗСКОЙ РЕСПУБЛИКИ
             </Typography>
             <DetailBtn />
         </div>         
         <Typography className={css.p} variant="p">
               С ДРУГОЙ СТОРОНЫ, СУЩЕСТВУЮЩАЯ ТЕОРИЯ ПОЗВОЛЯЕТ ОЦЕНИТЬ ЗНАЧЕНИЕ 
               <br/> УКРЕПЛЕНИЯ МОРАЛЬНЫХ ЦЕННОСТЕЙ.ВНЕЗАПНО, ДЕЙСТВИЯ ПРЕДСТАВИТЕЛЕЙ
         </Typography>
      </section>
   );
};
