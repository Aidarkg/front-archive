import { Typography } from "../../Typography/Typography.jsx";
import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import classes from "./Services.module.sass";
import { t } from "i18next";
import { CustomButton } from "../../UI/customButton/CustomButton.jsx";
import { DownloadIcon } from "../../assets/icons/DownloadIcon.jsx";

const titleCard = [
   {
      id: 1,
      text: "Предоставление копий документов из архивного фонда",
   },
];

// Создаем массив из 8 элементов на основе titleCard
const repeatedTitleCard = Array(9).fill(titleCard[0]).map((item, index) => ({
   ...item,
   id: item.id + '-' + index,
}));

export const Services = () => {
   return (
      <section>
         <div className="container">
            <Breadcrumbs currentPage={"услуги"} />
            <Typography
               className={classes.services}
               variant="h1"
               color="blue500"
            >
               {t("servicePage.heading")}
            </Typography>
            <CustomButton
               buttonStyle="blue"
               type="submit"
               text={"скачать прейскурант"}
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
                     <CustomButton
                        className={classes.btnCardService}
                        text={"платно"}
                        type="submit"
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
