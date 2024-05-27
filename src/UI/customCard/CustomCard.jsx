import s from "./CustomCard.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomDate} from "../customDate/CustomDate.jsx";
import {ImageCount} from "../imageCount/ImageCount.jsx";

export const CustomCard = ({onClick, image, date, description, imageCount, isLargeCard}) => {

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', options);
    };

    return (
        <div className={`${s.customCard} ${isLargeCard ? s.largeCard : " "}`}
             onClick={onClick}>
            <div>
                <img className={`${s.customCardImage} ${isLargeCard ? s.largeImage : " "}`}
                     src={image} alt="publication"/>
            </div>
            <div className={s.customCardInfo}>
                <div className={s.customCardExtraInfo}>
                    {date &&
                        <CustomDate date={formatDate(date)}/>
                    }
                    {imageCount && (
                        <ImageCount imageCount={imageCount}/>
                    )}
                </div>
                <Typography
                    variant="smallBody" truncate={68}>{description}</Typography>
            </div>
        </div>
    );
};
