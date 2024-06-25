import classes from "./Banner.module.sass";
import {Typography} from "../../UI/Typography/Typography";
import {Container} from "../../components/container/Container";
import {useTranslation} from "react-i18next";
import {useBanner} from "./store/useBanner.js";
import {useEffect} from "react";
import {CustomButton} from "../../UI/customButton/CustomButton.jsx";
import {ArrowRight} from "../../assets/icons/ArrowRight.jsx";
import {PATH} from "../../utils/constants/Constants.js";

export const Banner = () => {
    const {t} = useTranslation();
    const {banner, getBanner, symbol, getSymbol} = useBanner();

    useEffect(() => {
        getBanner();
        getSymbol();
    }, []);

    const bannerStyle = {
        backgroundImage: banner ? `url(${banner})` : 'none',
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <section className={classes.banner} style={bannerStyle}>
            <Container>
                <div className={classes.main}>
                    <div className={classes.mainContent}>
                        <div className={classes.mainContentImg}>
                            <img src={symbol} alt="symbol"/>
                        </div>
                        <Typography variant="h2" color={"main"} className={classes.bannerText}>
                            {t("mainPage.hero.heading")}
                        </Typography>
                    </div>
                    <CustomButton
                        text={t("mainPage.hero.button")}
                        isBanner={true}
                        actionType={"link"}
                        to={PATH.aboutArchive}
                        icon={<ArrowRight/>}/>
                </div>
            </Container>
        </section>
    );
};
