import classes from "./CustomDate.module.sass";
import {CalendarIcon} from "../../assets/icons/CalendarIcon.jsx";
import {Typography} from "../../Typography/Typography.jsx";

export const CustomDate = ({date, isWhite}) => {
    return (
        <div className={`${classes.customDate} ${isWhite? classes.whiteBgc : ""}`}>
            <CalendarIcon/>
            <Typography
                variant="extraSmallBody">{date}</Typography>
        </div>
    );
};
