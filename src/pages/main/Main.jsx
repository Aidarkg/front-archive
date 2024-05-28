import { Banner } from "../../modules/banner/Banner.jsx";
import { faqList } from "../FAQ/scripts/AccardionMenu.jsx";
import personFaq from "../../pages/FAQ/img/personFaq.svg";
import { Accardion } from "../../UI/Accordion/Accordion.jsx";
import { MainGallery } from "./mainGallery/MainGallery.jsx";
import { Organizations } from "./organizations/Organizations.jsx";
import ContactSection from "../../modules/contactSection/ContactSection.jsx";
import { MainAboutArchive } from "./mainAboutArchive/MainAboutArchive.jsx";
import classes from "../../UI/Accordion/AccardionItem.module.sass";

export const Main = () => {
   const trimmedFaqList = [
      faqList[0],
      faqList[1],
      faqList[7],
      faqList[8],
      faqList[9],
   ];
   return (
      <section>
         <Banner />
         <MainAboutArchive />
         <MainGallery />
         <div className="container">
            <div className={classes.accardionPage}>
               <Accardion faqList={trimmedFaqList} />
               <div className={classes.imgAccardion}>
                  <img src={personFaq} alt="personFaq" />
               </div>
            </div>
         </div>
         <Organizations />
         <ContactSection />
      </section>
   );
};
