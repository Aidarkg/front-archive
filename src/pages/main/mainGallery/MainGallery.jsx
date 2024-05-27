import classes from "./MainGallery.module.sass";
import {PublicationBlock} from "../publicationBlock/PublicationBlock.jsx";
import {usePublications} from "../../publications/api/PublicationsStore.js";
import {useEffect} from "react";
import {usePhotos} from "../../photo/api/PhotosStore.js";
import {useVideo} from "../../video/api/VideoStore.js";

export const MainGallery = () => {

    const {publications, getPublications}=usePublications(state => ({
        publications: state.publications,
        getPublications: state.getPublications
    }));
    const {photosContent, getPhotosContent}=usePhotos(state => ({
        photosContent: state.photosContent,
        getPhotosContent: state.getPhotosContent
    }))
    const {videoContent, getVideoContent}=useVideo(state => ({
        videoContent: state.videoContent,
        getVideoContent: state.getVideoContent
    }))
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
            <div className="container">
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
            </div>
        </section>
    );
};