import classes from "./MainGallery.module.sass";
import {PublicationBlock} from "../publicationBlock/PublicationBlock.jsx";
import {usePublications} from "../../publications/api/PublicationsStore.js";
import {useEffect} from "react";
import {usePhotos} from "../../photo/api/PhotosStore.js";
import {useVideo} from "../../video/api/VideoStore.js";
import {Container} from "../../../components/container/Container.jsx";
import {useTranslation} from "react-i18next";

export const MainGallery = () => {

    const {publications, getPublications} = usePublications();
    const {photosContent, getPhotosContent} = usePhotos();
    const {videoContent, getVideoContent} = useVideo();
    const {t}=useTranslation();
    const getFirstFourItems = (array) => array.slice(0, 4);
    const sections = [
        {
            title: t("mainPage.publications.title"),
            content: getFirstFourItems(publications),
            path: "/publications",
            linkText: t("mainPage.publications.button"),
            type: "publications"
        },
        {
            title: t("mainPage.photoGallery.title"),
            content: getFirstFourItems(photosContent),
            path: "/photo",
            linkText: t("mainPage.photoGallery.button"),
            type: "photo"
        },
        {
            title: t("mainPage.videoGallery.title"),
            content: getFirstFourItems(videoContent),
            path: "/video",
            linkText: t("mainPage.videoGallery.button"),
            type: "video"
        }
    ];
    useEffect(() => {
        getPublications();
        getPhotosContent();
        getVideoContent();
    }, []);
    return (
        <section className={classes.gallery}>
            <Container>
                <div className={classes.galleryInner}>
                    {sections.map((section, index) => (
                        <PublicationBlock
                            key={index}
                            contentArray={section.content}
                            title={section.title}
                            path={section.path}
                            linkText={section.linkText}
                            type={section.type}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};