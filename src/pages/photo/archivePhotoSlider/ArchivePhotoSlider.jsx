import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import classes from "./ArchivePhotoSlider.module.sass";
import {usePhotos} from "../api/PhotosStore.js";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const ArchivePhotoSlider = () => {

    const {archivePhoto, getArchiveImages, getPhotosContent}=usePhotos();
    const navigate = useNavigate();

    useEffect(() => {
        getArchiveImages();
        getPhotosContent();
    }, []);

    return (
        <div className={classes.swiper}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView="auto"
                centeredSlides={true}
                speed={5000}
                loop={true}
                allowTouchMove={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                spaceBetween={15}
            >
                {archivePhoto?.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className={classes.swiperSlide}
                        onClick={() => navigate(`/photo/archive/${item.id}`)}
                    >
                        <div className={classes.swiperImage}>
                            <img src={item.photo} alt="archive photo" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
