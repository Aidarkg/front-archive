import classes from "./ContentBlocks.module.sass";
import {Typography} from "../../../UI/Typography/Typography.jsx";
import {CustomButton} from "../../../UI/customButton/CustomButton.jsx";
import {useTranslation} from "react-i18next";
import {ArrowRight} from "../../../assets/icons/ArrowRight.jsx";

export const ContentBlocks = ({heading, text, image, index, isMain, className}) => {
    const {t} = useTranslation();
    return (
        <div className={`${classes.contentBlock} ${index % 2 === 0 ? classes.left : classes.right} ${className} ${isMain? classes.main: ""}`}>
            <div>
                <div className={`${classes.contentBlockImage} ${isMain? classes.left: ""}`}>
                    <img src={image} alt="Image"/>
                </div>
                <Typography variant="h2" className={classes.contentBlockHeading}>
                    {heading}
                </Typography>

                <Typography variant="body" truncate={isMain ? 250 : false} className={classes.contentBlockText}>
                    {text}
                </Typography>
                {isMain && (
                   <div className={classes.contentBlockBtn}>
                       <CustomButton
                          actionType="link"
                          to="/aboutArchive"
                          text={t("mainPage.about.button")}
                          icon={<ArrowRight/>}
                          isBig={true}
                       />
                   </div>

                )}
            </div>

        </div>
    );
};
