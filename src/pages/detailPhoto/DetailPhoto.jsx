import {ImageCount} from "../../UI/imageCount/ImageCount.jsx";
import {CustomDate} from "../../UI/customDate/CustomDate.jsx";
import {Typography} from "../../UI/Typography/Typography.jsx";
import classes from "./DetailPhoto.module.sass";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {usePhotos} from "../photo/api/PhotosStore.js";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {Container} from "../../components/container/Container.jsx";
import {useTranslation} from "react-i18next";
import {useLanguageStore} from "../../utils/languageStore/UseLanguageStore.js";

export const DetailPhoto = () => {

    const {id} = useParams();
    const {images, getImages, photoData, loading}=usePhotos();
    const {t}=useTranslation();
    const { language } = useLanguageStore();

    useEffect(() => {
        getImages(id);
    }, [id, language]);

    return (
        <section className={classes.detailPhoto}>
           <Container>
               <Breadcrumbs currentPage={t("mainPage.photoGallery.title")} parentPageLink={"/photo"}/>
               <div className={classes.detailPhotoInner}>
                   {loading&& <Loader/>}
                   <div className={classes.detailPhotoHead}>
                       <div className={classes.detailPhotoHeadInfo}>
                           <CustomDate date={photoData.public_date} isWhite={true}/>
                           <ImageCount imageCount={images.length} isWhite={true}/>
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
