import {ImageCount} from "../../UI/imageCount/ImageCount.jsx";
import {CustomDate} from "../../UI/customDate/CustomDate.jsx";
import {Typography} from "../../UI/Typography/Typography.jsx";
import classes from "./DetailPhoto.module.sass";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {usePhotos} from "../photo/store/usePhotosStore.js";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {Container} from "../../components/container/Container.jsx";
import {useTranslation} from "react-i18next";

export const DetailPhoto = () => {
    const {id} = useParams();
    const {images, getImages, photoData, loading}=usePhotos();
    const {t, i18n}=useTranslation();


    useEffect(() => {
        getImages(id, i18n.language);
    }, [id, i18n.language]);

    return (
        <section className={classes.detailPhoto}>
           <Container>
               <Breadcrumbs currentPage={t("mainPage.photoGallery.title")} parentPageLink={"/photo"}/>
               <div className={classes.detailPhotoInner}>
                   {loading&& <Loader/>}
                   <div className={classes.detailPhotoHead}>
                       <div className={classes.detailPhotoHeadInfo}>
                           <CustomDate date={photoData.public_date} isWhite={true}/>
                           {images.length>0&&<ImageCount  imageCount={images.length} isWhite={true}/>}
                       </div>
                       <Typography variant="h2">{photoData.title}</Typography>
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
           </Container>
        </section>
    );
};
