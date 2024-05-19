import s from "./CustomCard.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {ImageIcon} from "../../assets/icons/ImageIcon.jsx";
import {CalendarIcon} from "../../assets/icons/CalendarIcon.jsx";

export const CustomCard = ({image, date, description, imageCount, isLargeCard, gridColumn, gridRow}) => {
    return (
        <div className={`${s.customCard} ${isLargeCard ? s.largeCard : " "}`} style={{gridColumn, gridRow}}>
            <div>
                <img className={`${s.customCardImage} ${isLargeCard ? s.largeImage : " "}`}
                     src={image} alt="publication"/>
            </div>
            <div className={s.customCardInfo}>
                <div className={s.customCardExtraInfo}>
                    <div className={s.customCardExtraInfoDate}>
                        <CalendarIcon/>
                        <Typography
                            variant="extraSmallBody">{date}</Typography>
                    </div>
                    {imageCount && (
                        <div className={s.customCardExtraInfoImg}>
                            <ImageIcon/>
                            <Typography
                                variant="extraSmallBody">{imageCount} фото</Typography>
                        </div>
                    )}
                </div>
                <Typography
                    variant="smallBody" truncate={68}>{description}</Typography>
            </div>
        </div>
    );
};
