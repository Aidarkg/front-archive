import {GalleryCard} from "../galleryCard/GalleryCard.jsx";
import s from "./galleryBlock.module.sass";
import {CustomLink} from "../customLink/CustomLink.jsx";

export const GalleryBlock=({galleryTitle, galleryDescription, galleryImage, galleryLink, galleryLinkText})=>{
    return <div className={s.galleryBlock}>
        <div className={s.galleryBlockTitle}>
            <h2>{galleryTitle}</h2>
        </div>
        <div className={s.galleryBlockContent}>
            <GalleryCard description={galleryDescription} image={galleryImage}/>
            <GalleryCard description={galleryDescription} image={galleryImage}/>
            <GalleryCard description={galleryDescription} image={galleryImage}/>
            <GalleryCard description={galleryDescription} image={galleryImage}/>
        </div>
        <div className={s.galleryBlockLink}>
            <CustomLink link={galleryLink} customLinkText={galleryLinkText}/>
        </div>
    </div>;
};