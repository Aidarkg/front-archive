import css from "./SwiperOrganization.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { OrganizationLogo1 } from "../../../../assets/logos/OrganizationLogo1";
import { OrganizationLogo2 } from "../../../../assets/logos/OrganizationLogo2";
import { OrganizationLogo3 } from "../../../../assets/logos/OrganizationLogo3";
import { OrganizationLogo4 } from "../../../../assets/logos/OrganizationLogo4";
import { OrganizationLogo5 } from "../../../../assets/logos/OrganizationLogo5";
import { OrganizationLogo6 } from "../../../../assets/logos/OrganizationLogo6";
import { Typography } from "../../../../Typography/Typography";

const menuImgSwiper = [
   { img: <OrganizationLogo1 />, name: "Жогорку Кенеш Кыргызской Республики" },
   {
      img: <OrganizationLogo2 />,
      name: "Кабинет Министров Кыргызской Республики",
   },
   { img: <OrganizationLogo3 />, name: "Государственное учреждение «Түндүк»" },
   { img: <OrganizationLogo4 />, name: "ГУОБДД МВД Кыргызской Республики" },
   { img: <OrganizationLogo5 />, name: "МВД Кыргызской Республики" },
   {
      img: <OrganizationLogo6 />,
      name: "Администрация Президента Кыргызской Республики",
   },
];

export const SwiperOrganizations = ({ setSwiperInstance }) => {
   return (
      <>
         <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={10}
            className={css.mySwiper}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
         >
            <div>
               {menuImgSwiper.map((Organition, idx) => {
                  return (
                     <SwiperSlide key={idx} className={css.mapOrganization}>
                        {Organition.img}
                        <Typography
                           className={css.nameOrganizations}
                           variant="h3"
                        >
                           {Organition.name}
                        </Typography>
                     </SwiperSlide>
                  );
               })}
            </div>
         </Swiper>
      </>
   );
};
