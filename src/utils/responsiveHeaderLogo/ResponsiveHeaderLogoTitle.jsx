import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../hooks/useWindowSize";

import { Typography } from "../../Typography/Typography";
import { NavLink } from "react-router-dom";


export const ResponsiveHeaderLogoTitle = () => {
    const { t } = useTranslation();
    const [width] = useWindowSize();

    const renderTypography = () => {
        if (width <= 400) {
            return (
                <>
                    <Typography variant="h5" color="grey500">
                        {t("header&footer.logo.archivePresidentKR")}
                    </Typography>
                    <Typography variant="extraSmallBody" color="grey500">
                        {t("header&footer.logo.kyrgyzRepublic")}
                    </Typography>
                </>
            );
        } else if (width <= 800) {
            return (
                <>
                    <Typography variant="h3" color="grey500">
                        {t("header&footer.logo.archivePresidentKR")}
                    </Typography>
                    <Typography variant="smallBody" color="grey500">
                        {t("header&footer.logo.kyrgyzRepublic")}
                    </Typography>
                </>
            );
        } else {
            return (
                <>
                    <Typography variant="h3" color="grey500">
                        {t("header&footer.logo.archivePresidentKR")}
                    </Typography>
                    <Typography variant="body" color="grey500">
                        {t("header&footer.logo.kyrgyzRepublic")}
                    </Typography>
                </>
            );
        }
    };

    return (
        <NavLink to={"/"}>
            {renderTypography()}
        </NavLink>
    );
};


