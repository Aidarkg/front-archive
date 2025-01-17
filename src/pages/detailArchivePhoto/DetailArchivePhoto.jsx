import {useParams} from "react-router-dom";
import classes from "./DetailArchivePhoto.module.sass";
import {Container} from "../../components/container/Container.jsx";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {useTranslation} from "react-i18next";
import {usePhotos} from "../photo/store/usePhotosStore.js";
import {Loader} from "../../components/loader/Loader.jsx";
import {useEffect} from "react";
import {Typography} from "../../UI/Typography/Typography.jsx";
export const DetailArchivePhoto = () => {
    const {id}=useParams();
    const {t, i18n}=useTranslation();
    const { getArchiveImages, archiveContent, loading } = usePhotos();

    useEffect(() => {
        getArchiveImages(id, i18n.language);
    }, [id, i18n.language]);
    return (
        <section className={classes.archivePhoto}>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.photoGallery.title")} parentPageLink={"/photo"}/>
                {loading && <Loader />}
                <div className={classes.archivePhotoInner}>
                    <div className={classes.archivePhotoImg}>
                        <img src={archiveContent.photo} alt="archive photo"/>
                    </div>
                    <div className={classes.archivePhotoText}>
                        <Typography variant="h3" color="blue500">{archiveContent.title}</Typography>
                        <Typography>{archiveContent.description}</Typography>
                    </div>
                </div>
            </Container>
        </section>
    );
};
