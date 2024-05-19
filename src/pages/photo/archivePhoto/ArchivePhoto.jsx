import s from "./ArchivePhoto.module.sass";

export const ArchivePhoto = ({image, alt, isLarge, style}) => {
    return (
        <div className={`${s.archiveImage} ${isLarge? s.largeArchiveImage: " "}`} style={style}>
            <img src={image} alt={alt} className={`${s.archiveImage} ${isLarge? s.largeArchiveImage: " "}`}/>
        </div>

    );
};

