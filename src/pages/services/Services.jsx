import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";

import { Typography } from "../../UI/Typography/Typography.jsx";
import classes from "./Services.module.sass";
import { CustomButton } from "../../UI/customButton/CustomButton.jsx";
import { DownloadIcon } from "../../assets/icons/DownloadIcon.jsx";
import { useTranslation } from "react-i18next";

const titleCard = [
   {
      id: 1,
      text: "Предоставление копий документов из архивного фонда",
   },
];

const repeatedTitleCard = Array(9).fill(titleCard[0]).map((item, index) => ({
   ...item,
   id: item.id + '-' + index,
}));


export const Services = () => {
   const {t} = useTranslation();
   return (
      <section>
         <div className="container">
            <Breadcrumbs currentPage={"услуги"} />
            <Typography
               className={classes.services}
               variant="h1"
               color="blue500"
            >
               {t("header&footer.nav.services")}
            </Typography>
            <CustomButton
               buttonStyle="blue"
               type="submit"
               text={t("servicePage.button")}
               className={classes.downloadPreiList}
               icon={<DownloadIcon />}
            />
            <div className={classes.mapCards}>
               {repeatedTitleCard.map(({ text, id }) => (
                  <div className={classes.serviceCards} key={id}>
                     <Typography
                        className={classes.textServiceCards}
                        variant="h6"
                        color="grey500"
                     >
                        {text}
                     </Typography>
                     <div className={classes.btnCardService}>
                        <Typography  variant="span">
                           платно
                        </Typography>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
