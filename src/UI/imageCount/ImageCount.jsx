import classes from "./ImageCount.module.sass";
import {ImageIcon} from "../../assets/icons/ImageIcon.jsx";
import {Typography} from "../../Typography/Typography.jsx";

export const ImageCount = ({imageCount, isWhite}) => {
    return (
        <div className={`${classes.imageCount} ${isWhite? classes.whiteBgc : ""}`}>
            <ImageIcon/>
            <Typography
                variant="extraSmallBody">{imageCount} фото</Typography>
        </div>
    );
};
