import { useState } from "react";
import { Typography } from "../../../Typography/Typography";
import { SwiperOrganizations } from "./swiperOrganization/SwiperOrganizations";
import css from "./swiperOrganization/SwiperOrganization.module.sass";

export const Organizations = () => {
   const [swiperInstance, setSwiperInstance] = useState(null);

   const handleNext = () => {
      if (swiperInstance) {
         swiperInstance.slideNext();
      }
   };

   const handlePrev = () => {
      if (swiperInstance) {
         swiperInstance.slidePrev();
      }
   };

   return (
      <section className="container">
         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "30px",}}>
            <Typography variant="h2">Организации</Typography>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "end" }}>
               <div className={css.swiper_button_next} onClick={handlePrev}>
                  ←
               </div>
               <div className={css.swiper_button_prev} onClick={handleNext}>
                  →
               </div>
            </div>
         </div>
         <SwiperOrganizations setSwiperInstance={setSwiperInstance} />
      </section>
   );
};
