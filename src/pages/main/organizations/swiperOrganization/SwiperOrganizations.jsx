import css from "./SwiperOrganization.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { OrganizationLogo1 } from "../../../../assets/logos/OrganizationLogo1";
import { OrganizationLogo2 } from "../../../../assets/logos/OrganizationLogo2";
import { OrganizationLogo3 } from "../../../../assets/logos/OrganizationLogo3";
import { OrganizationLogo4 } from "../../../../assets/logos/OrganizationLogo4";
import { OrganizationLogo5 } from "../../../../assets/logos/OrganizationLogo5";
import { OrganizationLogo6 } from "../../../../assets/logos/OrganizationLogo6";
import { Typography } from "../../../../UI/Typography/Typography";

const menuImgSwiper = [
   {
      img: <OrganizationLogo1 />,
      name: "Жогорку Кенеш Кыргызской Республики",
      aHrefOrganization: "https://kenesh.kg/",
   },
   {
      img: <OrganizationLogo2 />,
      name: "Кабинет Министров Кыргызской Республики",
      aHrefOrganization: "https://www.gov.kg/ru",
   },
   {
      img: <OrganizationLogo3 />,
      name: "Государственное учреждение «Түндүк»",
      aHrefOrganization: "https://tunduk.gov.kg/ru",
   },
   {
      img: <OrganizationLogo4 />,
      name: "ГУОБДД МВД Кыргызской Республики",
      aHrefOrganization: "https://www.guobdd.kg/",
   },
   {
      img: <OrganizationLogo5 />,
      name: "МВД Кыргызской Республики",
      aHrefOrganization: "https://mvd.gov.kg/rus",
   },
   {
      img: <OrganizationLogo6 />,
      name: "Администрация Президента Кыргызской Республики",
      aHrefOrganization: "https://president.kg/",
   },
];

export const SwiperOrganizations = () => {
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
                   spaceBetween: 16
               },
               680: {   
                  slidesPerView: 2,
                  spaceBetween: 50
               },
               800: {
                  slidesPerView: 2,
                  spaceBetween: 50
               },
               1024: {
                  slidesPerView: 2,
                  spaceBetween: 50
               },
               1380: {
                   slidesPerView: 3.2,
                   spaceBetween: 50
               },
           }}
            spaceBetween={50}
            className={css.mySwiper}
         >
            {menuImgSwiper.map((Organization, idx) => {
               return (
                  <SwiperSlide key={idx}>
                     <a
                        style={{ color: "black" }}
                        href={Organization.aHrefOrganization}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className={css.mapOrganization}>
                           {Organization.img}
                        </div>
                        <Typography
                           className={css.nameOrganizations}
                           variant="h3"
                        >
                           {Organization.name}
                        </Typography>
                     </a>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};
