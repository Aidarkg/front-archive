import {GalleryCard} from "../galleryCard/GalleryCard.jsx";
import s from "./galleryBlock.module.sass";
import {CustomLink} from "../customLink/CustomLink.jsx";

export const GalleryBlock=({galleryTitle, galleryDescription, galleryImage, galleryLink, galleryLinkText})=>{
    const galleryCardArray = [{
        description: galleryDescription, image: galleryImage
        
    },{
        description: galleryDescription, image: galleryImage
        
    },{
        description: galleryDescription, image: galleryImage
        
    },{
        description: galleryDescription, image: galleryImage
        
    },]
    return (<div className={s.galleryBlock}>
        <div className={s.galleryBlockTitle}>
            <h2>{galleryTitle}</h2>
        </div>
        <div className={s.galleryBlockContent}>
            {galleryCardArray?.map((item, index)=>(
                <GalleryCard key={index} description={item.description} image={item.image}/>
            ))}
        </div>
        <div className={s.galleryBlockLink}>
            <CustomLink link={galleryLink} customLinkText={galleryLinkText}/>
        </div>
    </div>);
};
// FIX ME поработать над семантикой обернуть переменную usememo чтобы она каждый раз не рендорилась
