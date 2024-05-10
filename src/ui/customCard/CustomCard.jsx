import s from "./CustomCard.module.sass";
import dateIcon from "../icons/calendar.svg";
import imageIcon from "../icons/image.svg";
import { Typography } from "../../Typography/Typography.jsx";

export const CustomCard = ({ image, date, description, imageCount }) => {
   return (
      <div className={s.customCard}>
         <div>
            <img className={s.customCardImage} src={image} alt="publication" />
         </div>
         <div className={s.customCardInfo}>
            <div className={s.customCardExtraInfo}>
               <div className={s.customCardExtraInfoDate}>
                  <img src={dateIcon} alt="date icon" />
                  <Typography variant="extraSmallBody">{date}</Typography>
               </div>
               {imageCount && (
                  <div className={s.customCardExtraInfoImg}>
                     <img src={imageIcon} alt="date icon" />
                     <Typography variant="extraSmallBody">
                        {imageCount} фото
                     </Typography>
                  </div>
               )}
            </div>
            <Typography variant="smallBody" truncate={68}>
               {description}
            </Typography>
         </div>
      </div>
   );
};
