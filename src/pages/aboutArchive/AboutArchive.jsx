import { ContentBlocks } from "./contentBlocks/ContentBlocks";
import img from "../../assets/images/about-pic.png";
import { useTranslation } from "react-i18next";

export const AboutArchive = () => {
   const { t } = useTranslation();

   const blocks = [
      {
         heading: t("aboutArchivePage.section1.heading"),
         text: t("aboutArchivePage.section1.description"),
         image: img,
      },
      {
         image: img,
         heading: t("aboutArchivePage.section2.heading"),
         text: t("aboutArchivePage.section2.description"),
      },
      {
         heading: t("aboutArchivePage.section3.heading"),
         text: t("aboutArchivePage.section3.description"),
         image: img,
      },
   ];

   return <ContentBlocks blocks={blocks} />;
};
