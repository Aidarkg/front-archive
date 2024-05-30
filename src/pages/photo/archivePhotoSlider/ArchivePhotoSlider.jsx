import akaev from "../../../assets/images/akaev.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import classes from "./ArchivePhotoSlider.module.sass";

export const ArchivePhotoSlider = () => {
    const archiveImages = [
        { image: akaev },
        { image: akaev },
        { image: akaev },
        { image: akaev },
        { image: akaev },
    ];

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
                {archiveImages.map((item, index) => (
                    <SwiperSlide key={index} className={classes.swiperSlide}>
                        <div className={classes.swiperImage}>
                            <img src={item.image} alt="archive photo" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
