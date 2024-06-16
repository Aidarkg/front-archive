import classes from "./Video.module.sass";
import { CustomCard } from "../../UI/customCard/CustomCard.jsx";
import { useVideo } from "./api/VideoStore.js";
import { useEffect } from "react";
import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import { Container } from "../../components/container/Container.jsx";
import { Loader } from "../../components/loader/Loader.jsx";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../../UI/customButton/CustomButton.jsx";
import { Typography } from "../../UI/Typography/Typography.jsx";

export const Video = () => {
    const { videoContent, getVideoContent, loading, loadMoreVideoContent, nextPage, error } = useVideo();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        getVideoContent(i18n.language);
    }, [i18n.language]);

    const getMoreVideos = () => {
        loadMoreVideoContent(nextPage, i18n.language);
    };

    return (
        <section className={classes.video}>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.videoGallery.title")} />
                <div className={classes.videoInner}>
                    <Typography variant="h1">{t("mainPage.videoGallery.title")}</Typography>
                    {loading && !videoContent.length && <Loader />}
                    {error && <Typography variant="body" color="red">{error}</Typography>}
                    <div className={classes.videoContent}>
                        {videoContent.map((item, index) => (
                            <div className={classes.videoContentCard} key={item.id || index}>
                                <CustomCard
                                    video={item.video || item.video_link}
                                    date={item.public_date}
                                    title={item.title}
                                    isLargeCard={index === 0}
                                />
                            </div>
                        ))}
                    </div>
                    {loading && <Loader />}
                    {nextPage && !loading && (
                        <CustomButton onClick={getMoreVideos} text={t("loadMore")} />
                    )}
                </div>
            </Container>
        </section>
    );
};
