import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "../../../../UI/Typography/Typography";
import css from "./SwiperOrganization.module.sass";
import useOrganizationsStore from "../store/useOrganizationStore";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const SwiperOrganizations = () => {
   const {i18n} = useTranslation();
   const { organizations, loading, error, fetchOrganizations } =
      useOrganizationsStore();
   useEffect(() => {
      fetchOrganizations();
   }, [fetchOrganizations, i18n.language]);
   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;
   return (
      <>
         <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={3}
            centeredSlides={true}
            speed={2500}
            loop={true}
            allowTouchMove={false}
            autoplay={{
               delay: 0,
               disableOnInteraction: false,
               waitForTransition: true,
            }}
            breakpoints={{
               320: {
                  slidesPerView: 1,
               },
               360: {
                  slidesPerView: 1,
                  spaceBetween: 16,
               },
               680: {
                  slidesPerView: 2,
                  spaceBetween: 50,
               },
               800: {
                  slidesPerView: 2,
                  spaceBetween: 50,
               },
               1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
               },
               1380: {
                  slidesPerView: 3.2,
                  spaceBetween: 50,
               },
            }}
            spaceBetween={50}
            className={css.mySwiper}
         >
            {organizations.map((Organization, idx) => {
               return (
                  <SwiperSlide key={idx}>
                     <a
                        style={{ color: "black" }}
                        // FIX ME будет исползоватся в будушем  href={Organization.aHrefOrganization}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className={css.mapOrganization}>
                           {Organization.logo}
                        </div>
                        <Typography
                           className={css.nameOrganizations}
                           variant="h3"
                        >
                           {Organization.title}
                        </Typography>
                     </a>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};
