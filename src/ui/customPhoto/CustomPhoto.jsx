import s from "./CustomPhoto.module.sass";

export const CustomPhoto = ({image, alt, isLarge, style}) => {
    return (
        <div className={`${s.image} ${isLarge? s.largeImage: " "}`} style={style}>
            <img src={image} alt={alt} className={`${s.image} ${isLarge? s.largeImage: " "}`}/>
        </div>

    );
};

