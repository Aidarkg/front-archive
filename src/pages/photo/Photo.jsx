import {Typography} from "../../Typography/Typography.jsx";
import classes from "./Photo.module.sass";
import akaev from "../../assets/images/akaev.png";
import {CustomCard} from "../../UI/customCard/CustomCard.jsx";
import {useNavigate} from "react-router-dom";
import {usePhotos} from "./api/PhotosStore.js";
import {useEffect} from "react";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {useTranslation} from "react-i18next";

const archiveImages = [
    {image: akaev},
    {image: akaev},
    {image: akaev},
    {image: akaev},
    {image: akaev},
];


export const Photo = () => {
    const {photosContent, getPhotosContent} = usePhotos();
    useEffect(() => {
        getPhotosContent();
    }, []);

    const navigate = useNavigate();
    const {t}=useTranslation();
    return (
        <section>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.photoGallery.title")}/>
                <div className={classes.photo}>
                    <Typography variant="h1">{t("mainPage.photoGallery.title")}</Typography>
                    <div className={classes.photoArchive}>
                        {archiveImages && archiveImages.map((image, index) => (
                            <div className={classes.photoArchiveImage} key={index}>
                                <img src={image.image} alt="img"/>
                            </div>
                        ))}
                    </div>
                    <div className={classes.photoContent}>
                        {photosContent && photosContent.map((item) => (
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
                </div>
            </Container>
        </section>
    );
};

