import classes from "./Video.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomCard} from "../../UI/customCard/CustomCard.jsx";
import {useVideo} from "./api/VideoStore.js";
import {useEffect} from "react";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {useTranslation} from "react-i18next";
import {CustomButton} from "../../UI/customButton/CustomButton.jsx";
import {useLanguageStore} from "../../utils/languageStore/UseLanguageStore.js";

export const Video = () => {
    const {videoContent, getVideoContent, loading, loadMoreVideoContent, nextPage} = useVideo();
    const {t} = useTranslation();
    const {language} = useLanguageStore();

    useEffect(() => {
        getVideoContent();
    }, [language]);

    const getMoreVideos = () => {
        loadMoreVideoContent(nextPage);
    }

    return (
        <section className={classes.video}>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.videoGallery.title")}/>
                <div className={classes.videoInner}>
                    {loading && <Loader/>}
                    <Typography variant="h1">{t("mainPage.videoGallery.title")}</Typography>
                    <div className={classes.videoContent}>
                        {videoContent && videoContent.map((item, index) => (
                            <div className={classes.videoContentCard} key={index}>
                                <CustomCard
                                    video={item.video[index-1]}
                                    video_link={item.video_link}
                                    date={item.public_date}
                                    title={item.title}
                                    isLargeCard={index === 0}
                                />
                            </div>
                        ))}
                    </div>
                    {loading && <Loader/>}
                    {nextPage && (
                        <CustomButton onClick={getMoreVideos} text={"Еще"}/>
                    )}
                </div>
            </Container>
        </section>
    );
};
