import { Typography } from "../../UI/Typography/Typography.jsx";
import classes from "./Photo.module.sass";
import { CustomCard } from "../../UI/customCard/CustomCard.jsx";
import { useNavigate } from "react-router-dom";
import { usePhotos } from "./store/usePhotosStore.js";
import { useEffect } from "react";
import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import { Container } from "../../components/container/Container.jsx";
import { Loader } from "../../components/loader/Loader.jsx";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../../UI/customButton/CustomButton.jsx";
import {ArchivePhotoSlider} from "./archivePhotoSlider/ArchivePhotoSlider.jsx";


export const Photo = () => {
    const { photosContent, archivePhoto, getPhotosContent, getArchiveContent,loading, loadMorePhotosContent, nextPage } = usePhotos();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const getMorePhotos = () => {
        loadMorePhotosContent(nextPage);
    };

    useEffect(() => {
        getArchiveContent();
        getPhotosContent();
    }, [i18n.language]);

    return (
        <section>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.photoGallery.title")} />
                <div className={classes.photo}>
                    <Typography variant="h1">{t("mainPage.photoGallery.title")}</Typography>
                    {loading && <Loader />}
                    <div className={classes.photoArchive} >
                        {archivePhoto?.map((archiveImage) => (
                            <div className={classes.photoArchiveImage}
                                 key={archiveImage.id}
                                 onClick={() => navigate(`/photo/archive/${archiveImage.id}`)}
                            >
                                <img src={archiveImage.photo} alt="img" />
                            </div>
                        ))}
                    </div>
                    <ArchivePhotoSlider className={classes.slider}/>
                    <div className={classes.photoContent}>
                        {photosContent&& photosContent?.map((item) => (
                            <CustomCard
                                key={item.id}
                                date={item.public_date}
                                image={item.picture}
                                title={item.title}
                                imageCount={item.count_photo}
                                onClick={() => navigate(`/photo/${item.id}`)}
                            />
                        ))}
                    </div>
                    {loading && <Loader />}
                    {nextPage && (
                        <CustomButton onClick={getMorePhotos} text={t("loadMore")} />
                    )}
                </div>
            </Container>
        </section>
    );
};
