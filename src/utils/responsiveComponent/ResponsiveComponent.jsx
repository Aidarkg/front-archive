import { useWindowSize } from "../../hooks/useWindowSize";

import { useTranslation } from "react-i18next";

import { Typography } from "../../Typography/Typography";

import { HeaderLogo } from "../../assets/logos/headerLogos/HeaderLogo";
import { HeaderLogoMobile } from "../../assets/logos/headerLogos/HeaderLogoMobile";
import { HeaderLogoTablet } from "../../assets/logos/headerLogos/HeaderLogoTablet";

import { SearchIcon } from "../../assets/icons/SearchIcon";
import { SearchSvg } from "../../UI/Svg/SearchSvg";
import { SearchTabletSvg } from "../../UI/Svg/SearchTabletSvg";

export const ResponsiveComponent = ({ type, name, className }) => {
    const [width] = useWindowSize();
    const { t } = useTranslation();

    const renderComponent = () => {
        switch (type) {
            case 'headerLogo':
                if (width <= 420) {
                    return <HeaderLogoMobile />;
                } else if (width <= 800) {
                    return <HeaderLogoTablet />;
                } else {
                    return <HeaderLogo />;
                }

            case 'headerTitle':
                if (width <= 500) {
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

            case 'searchIcon':
                if (width <= 620) {
                    return <SearchSvg />;
                } else if (width <= 850) {
                    return <SearchTabletSvg />;
                } else {
                    return <SearchIcon />;
                }

            case 'truncatedRegulations':
                if (width <= 700) {
                    return (
                        <Typography truncate={30} className={className} variant="body" color="black">
                            {name}
                        </Typography>
                    );
                } else if (width <= 970) {
                    return (
                        <Typography truncate={60} className={className} variant="body" color="black">
                            {name}
                        </Typography>
                    );
                } else if (width <= 1440) {
                    return (
                        <Typography truncate={95} className={className} variant="body" color="black">{name}
                        </Typography>
                    );
                } else {
                    return (
                        <Typography truncate={55} className={className} variant="body" color="black">
                            {name}
                        </Typography>
                    );
                }

            default:
                return null;
        }
    };

    return renderComponent();
};

