import classes from "./MainGallery.module.sass";
import {PublicationBlock} from "../publicationBlock/PublicationBlock.jsx";
import {usePublications} from "../../publications/api/PublicationsStore.js";
import {useEffect} from "react";
import {usePhotos} from "../../photo/api/PhotosStore.js";
import {useVideo} from "../../video/api/VideoStore.js";
import {Container} from "../../../components/container/Container.jsx";

export const MainGallery = () => {

    const {publications, getPublications} = usePublications();
    const {photosContent, getPhotosContent} = usePhotos();
    const {videoContent, getVideoContent} = useVideo();
    const getFirstFourItems = (array) => array.slice(0, 4);
    const sections = [
        {
            title: "Публикации",
            content: getFirstFourItems(publications),
            path: "/publications",
            linkText: "Все публикации",
            type: "publications"
        },
        {
            title: "Фотогалерея",
            content: getFirstFourItems(photosContent),
            path: "/photo",
            linkText: "Все фотографии",
            type: "photo"
        },
        {
            title: "Видеогалерея",
            content: getFirstFourItems(videoContent),
            path: "/video",
            linkText: "Все видео",
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