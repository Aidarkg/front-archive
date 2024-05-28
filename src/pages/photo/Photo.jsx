import {Typography} from "../../Typography/Typography.jsx";
import classes from "./Photo.module.sass";
import akaev from "../../assets/images/akaev.png";
import {CustomCard} from "../../UI/customCard/CustomCard.jsx";
import {useNavigate} from "react-router-dom";
import {usePhotos} from "./api/PhotosStore.js";
import {useEffect} from "react";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
// import {Loader} from "../../components/loader/Loader.jsx";

const archiveImages = [
    {image: akaev},
    {image: akaev},
    {image: akaev},
    {image: akaev},
    {image: akaev},
];


export const Photo = () => {
    const {photosContent, getPhotosContent, loading} = usePhotos();
    useEffect(() => {
        getPhotosContent();
    }, []);


    const navigate = useNavigate();

    return (
        <section>
            <div className="container">
                <Breadcrumbs currentPage={"Фото"}/>
                <div className={classes.photo}>
                    <Typography variant="h1">Фото</Typography>
                    <div className={classes.photoArchive}>
                        {archiveImages && archiveImages.map((image, index) => (
                            <div className={classes.photoArchiveImage} key={index}>
                                <img src={image.image} alt="img"/>
                            </div>
                        ))}
                    </div>
                    <div className={classes.photoContent}>
                        {photosContent && photosContent.map((item) => (
                            <CustomCard
                                key={item.id}
                                date={item.public_date}
                                image={item.picture}
                                title={item.title}
                                imageCount={item.count_photo}
                                onClick={() => navigate(`/photo/${item.id}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

