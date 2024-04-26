import s from "./galleryCard.module.sass";
export const GalleryCard=({image, description})=>{
    return <div className={s.galleryCard}>
        <div>
            <img className={s.galleryCard__image} src={image} alt="politician"/>
        </div>
        <p>{description}</p>
    </div>;
};