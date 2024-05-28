import classes from "./Footer.module.sass";
import { NavLink } from "react-router-dom";
import { Typography } from "../../Typography/Typography.jsx";
import { useTranslation } from "react-i18next";
import { ResponsiveHeaderLogo } from "../../utils/responsiveHeaderLogo/ResponsiveHeaderLogo.jsx";
import { Container } from "../../components/container/Container.jsx";
import { useEffect } from "react";
import { useCounter } from "./store/Store.jsx";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
    const { t } = useTranslation();
    const { data, getData } = useCounter();

    useEffect(() => {
        getData();
    }, [getData]);

    const { ref } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footerContent}>
                    <div className={classes.footerLogo}>
                        <div>
                            <ResponsiveHeaderLogo />
                        </div>
                        <div className={classes.footerLogoText}>
                            <NavLink to={"/"}>
                                <Typography variant="h3" color="main">
                                    {t("header&footer.logo.archivePresidentKR")}
                                </Typography>
                                <Typography variant="body" color="main">
                                    {t("header&footer.logo.kyrgyzRepublic")}
                                </Typography>
                            </NavLink>
                        </div>
                    </div>
                    <nav className={classes.nav}>
                        <ul className={classes.navList}>
                            <li>
                                <NavLink to={'/'}>
                                    <Typography variant="h6">
                                        {t("main")}
                                    </Typography>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/aboutArchive'}>
                                    <Typography variant="h6">
                                        {t("header&footer.subnav.aboutArchive")}
                                    </Typography>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/management'}>
                                    <Typography variant="h6">
                                        {t("header&footer.subnav.management")}
                                    </Typography>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/photo'}>
                                    <Typography variant="h6">
                                        {t("header&footer.subnav.photo")}
                                    </Typography>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/video'}>
                                    <Typography variant="h6">
                                        {t("header&footer.subnav.video")}
                                    </Typography>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/npa'}>
                                    <Typography variant="h6">
                                        {t("header&footer.nav.regulations")}
                                    </Typography>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/services'}>
                                    <Typography variant="h6">
                                        {t("header&footer.nav.services")}
                                    </Typography>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/faq'}>
                                    <Typography variant="h6">
                                        {t("header&footer.nav.q&a")}
                                    </Typography>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contacts"}>
                                    <Typography variant="h6">
                                        {t("header&footer.nav.contacts")}
                                    </Typography>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.copyright}>
                        <Typography className={classes.copyright} variant="body" color="grey300">
                            © 2024 {t("header&footer.logo.archivePresidentKR")}  {t("header&footer.logo.kyrgyzRepublic")}
                        </Typography>
                        <button className={classes.counterBtn} ref={ref}>
                            <Typography color="grey100" variant="smallBody">
                                Счётчик посещений
                            </Typography>
                            <Typography variant="h6" color="main">
                                <CountUp start={0} end={data?.counter || 0} duration={2} />
                            </Typography>
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
