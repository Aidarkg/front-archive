import { Typography } from "../../Typography/Typography.jsx";
import classes from "./Photo.module.sass";
import akaev from "../../assets/images/akaev.png";
import { CustomCard } from "../../UI/customCard/CustomCard.jsx";
import { useNavigate } from "react-router-dom";
import { usePhotos } from "./api/PhotosStore.js";
import { useEffect } from "react";
import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import { Container } from "../../components/container/Container.jsx";
import { Loader } from "../../components/loader/Loader.jsx";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../../UI/customButton/CustomButton.jsx";
import {ArchivePhotoSlider} from "./archivePhotoSlider/ArchivePhotoSlider.jsx";
import {useLanguageStore} from "../../utils/languageStore/UseLanguageStore.js";

const archiveImages = [
    { image: akaev },
    { image: akaev },
    { image: akaev },
    { image: akaev },
    { image: akaev },
];

export const Photo = () => {
    const { photosContent, getPhotosContent, loading, loadMorePhotosContent, nextPage } = usePhotos();
    const { language } = useLanguageStore();

    useEffect(() => {
        getPhotosContent();
    }, [language]);

    const navigate = useNavigate();
    const { t } = useTranslation();

    const getMorePhotos = () => {
        loadMorePhotosContent(nextPage);
    };

    return (
        <section>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.photoGallery.title")} />
                <div className={classes.photo}>
                    <Typography variant="h1">{t("mainPage.photoGallery.title")}</Typography>
                    <div className={classes.photoArchive}>
                        {archiveImages?.map((image, index) => (
                            <div className={classes.photoArchiveImage} key={index}>
                                <img src={image.image} alt="img" />
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
                        <CustomButton onClick={getMorePhotos} text={"еще"} />
                    )}
                </div>
            </Container>
        </section>
    );
};
