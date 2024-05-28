import classes from "./CustomDate.module.sass";
import {CalendarIcon} from "../../assets/icons/CalendarIcon.jsx";
import {Typography} from "../../Typography/Typography.jsx";

export const CustomDate = ({date, isWhite}) => {
    const formatDate = (dateString) => {
        const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', options);
    };
    return (
        <div className={`${classes.customDate} ${isWhite? classes.whiteBgc : ""}`}>
            <CalendarIcon/>
            <Typography
                variant="extraSmallBody">{formatDate(date)}</Typography>
        </div>
    );
};
