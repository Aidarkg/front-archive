import classes from "./AccessibilitySvg.module.sass";

import { useState } from "react";

import { Typography } from "../../Typography/Typography";
import { useTranslation } from "react-i18next";

export const AccessibilitySvg = ({ className, id, alt }) => {
    const [isHovered, setIsHovered] = useState(false);

    const { t } = useTranslation();

    return (
        <div
            className={classes.content}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <svg
                id={id}
                className={className}
                alt={alt}
                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.0002 2.5C14.4936 2.5 18.232 5.73313 19.0157 10C18.232 14.2668 14.4936 17.5 10.0002 17.5C5.50675 17.5 1.76844 14.2668 0.98468 10C1.76844 5.73313 5.50675 2.5 10.0002 2.5ZM10.0002 15.8333C13.5299 15.8333 16.5502 13.3767 17.3147 10C16.5502 6.62336 13.5299 4.16667 10.0002 4.16667C6.47048 4.16667 3.45016 6.62336 2.68563 10C3.45016 13.3767 6.47048 15.8333 10.0002 15.8333ZM10.0002 13.75C7.92913 13.75 6.2502 12.0711 6.2502 10C6.2502 7.92893 7.92913 6.25 10.0002 6.25C12.0712 6.25 13.7502 7.92893 13.7502 10C13.7502 12.0711 12.0712 13.75 10.0002 13.75ZM10.0002 12.0833C11.1508 12.0833 12.0836 11.1506 12.0836 10C12.0836 8.84942 11.1508 7.91667 10.0002 7.91667C8.84965 7.91667 7.91686 8.84942 7.91686 10C7.91686 11.1506 8.84965 12.0833 10.0002 12.0833Z" fill="black" />
            </svg>
            {isHovered && (
                <Typography className={classes.title} variant="h6">
                    {t("header&footer.eyeIcon")}
                </Typography>
            )}
        </div>
    );
};