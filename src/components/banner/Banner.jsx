import img1 from "./images/symbol.svg";
import classes from "./Banner.module.sass";
import { DetailBtn } from "./detailBtn/DetailBtn";
import { Typography } from "../../Typography/Typography";



export const Banner = () => {
   return (
      <section className={classes.banner}>
         <div className={classes.container}>
            <div className={classes.main}>
               <img className={classes.img1} src={img1} alt="symbol" />
               <Typography className={classes.h1} variant="h1">
                  АРХИВ ПРЕЗИДЕНТА <br /> КЫРГЫЗСКОЙ РЕСПУБЛИКИ
               </Typography>
               <DetailBtn />
            </div>
            <Typography className={classes.p} variant="p">
               С ДРУГОЙ СТОРОНЫ, СУЩЕСТВУЮЩАЯ ТЕОРИЯ ПОЗВОЛЯЕТ ОЦЕНИТЬ ЗНАЧЕНИЕ
               <br /> УКРЕПЛЕНИЯ МОРАЛЬНЫХ ЦЕННОСТЕЙ.ВНЕЗАПНО, ДЕЙСТВИЯ
               ПРЕДСТАВИТЕЛЕЙ
            </Typography>
         </div>
      </section>
   );
};
