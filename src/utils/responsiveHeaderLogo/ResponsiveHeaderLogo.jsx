import { HeaderLogo } from "../../assets/logos/headerLogos/HeaderLogo";
import { HeaderLogoMobile } from "../../assets/logos/headerLogos/HeaderLogoMobile";
import { HeaderLogoTablet } from "../../assets/logos/headerLogos/HeaderLogoTablet";

import { useWindowSize } from "../../hooks/useWindowSize";

export const ResponsiveHeaderLogo = () => {
    const [widthImage] = useWindowSize();

    if (widthImage <= 420) {
        return <HeaderLogoMobile />;
    } else if (widthImage <= 800) {
        return <HeaderLogoTablet />;
    } else {
        return <HeaderLogo />;
    }
};


