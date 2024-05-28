import classes from "./CustomCard.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomDate} from "../customDate/CustomDate.jsx";
import {ImageCount} from "../imageCount/ImageCount.jsx";

export const CustomCard = ({onClick, image, video, date, title, imageCount, isLargeCard}) => {

    const formatDate = (dateString) => {
        const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', options);
    };

    return (
        <div className={`${classes.customCard} ${isLargeCard ? classes.largeCard : " "}`}
             onClick={onClick}>
            <div className={classes.customCardImage}>
                {image && <img className={`${classes.customCardImage} ${isLargeCard ? classes.largeImage : " "}`}
                               src={image} alt="publication"/>}
                {video && <video src={video}/>}
            </div>
            <div className={classes.customCardInfo}>
                <div className={classes.customCardExtraInfo}>
                    {date &&
                        <CustomDate date={formatDate(date)}/>
                    }
                    {imageCount && (
                        <ImageCount imageCount={imageCount}/>
                    )}
                </div>
                <Typography
                    variant="smallBody" truncate={68}>{title}</Typography>
            </div>
        </div>
    );
};
