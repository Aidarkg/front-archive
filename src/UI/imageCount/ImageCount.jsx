import classes from "./ImageCount.module.sass";
import {ImageIcon} from "../../assets/icons/ImageIcon.jsx";
import {Typography} from "../Typography/Typography.jsx";
import {useTranslation} from "react-i18next";

export const ImageCount = ({imageCount, isWhite}) => {
    const {t} =useTranslation();
    return (
        <div className={`${classes.imageCount} ${isWhite? classes.whiteBgc : ""}`}>
            <ImageIcon/>
            <Typography
                variant="extraSmallBody">{imageCount} {t("mainPage.photoGallery.photo")}</Typography>
        </div>
    );
};
