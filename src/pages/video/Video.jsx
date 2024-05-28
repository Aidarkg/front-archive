import classes from "./Video.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomCard} from "../../UI/customCard/CustomCard.jsx";
import {useVideo} from "./api/VideoStore.js";
import {useEffect} from "react";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {useTranslation} from "react-i18next";


export const Video = () => {

    const {videoContent, getVideoContent, loading} = useVideo();
    const {t}=useTranslation();

    useEffect(() => {
        getVideoContent();
    }, []);
    if (loading) {
        return <Loader/>
    }
    return (
        <section className={classes.video}>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.videoGallery.title")}/>
                <div className={classes.videoInner}>
                    <Typography variant="h1">{t("mainPage.videoGallery.title")}</Typography>
                    <div className={classes.videoContent}>
                        {videoContent && videoContent.map((item) => (
                            <CustomCard
                                key={item.id}
                                video={item.video}
                                date={item.public_date}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};