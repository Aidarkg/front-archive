import {ImageCount} from "../../UI/imageCount/ImageCount.jsx";
import {CustomDate} from "../../UI/customDate/CustomDate.jsx";
import {Typography} from "../../Typography/Typography.jsx";
import classes from "./DetailPhoto.module.sass";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usePhotos} from "../photo/api/PhotosStore.js";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";



export const DetailPhoto = () => {

    const {id} = useParams();
    const {images, getImages}=usePhotos(state => ({
        images: state.images,
        getImages: state.getImages
    }));
    const photosContent=usePhotos(state => state.photosContent)

    useEffect(() => {
        getImages(id);
    }, [id]);
    return (
        <section className={classes.detailPhoto}>
           <div className="container">
               <Breadcrumbs currentPage={"фото"} parentPageLink={"/photo"}/>
               <div className={classes.detailPhotoInner}>
                   <div className={classes.detailPhotoHead}>
                       <div className={classes.detailPhotoHeadInfo}>
                           <CustomDate date={images.date} isWhite={true}/>
                           <ImageCount imageCount={images.length} isWhite={true}/>
                       </div>
                       <Typography variant="h2">{images.title}</Typography>
                   </div>
                   <div className={classes.detailPhotoImages}>
                       {
                           images?.map((item, index)=>(
                               <div className={classes.imageWrapper} key={index}>
                                   <img src={item.photo} alt="img"/>
                               </div>
                           ))
                       }
                   </div>
               </div>
           </div>
        </section>
    );
};
