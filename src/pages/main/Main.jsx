import { Banner } from "../../components/banner/Banner.jsx";
import { faqList } from "../FAQ/scripts/AccardionMenu.jsx";
import personFaq from "../../pages/FAQ/img/personFaq.svg";
import { Accardion } from "../../ui/Accordion/Accordion.jsx";
<<<<<<< src/pages/main/Main.jsx
import {MainGallery} from "./mainGallery/MainGallery.jsx";
import { AboutArchive } from "../aboutArchive/AboutArchive.jsx";
import { MainGallery } from "./mainGallery/MainGallery.jsx";
import { Organizations } from "./organizations/Organizations.jsx";
import ContactSection from "../../components/contactSection/ContactSection.jsx";

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
          <AboutArchive />
          <MainGallery/>
         <div className="container" style={{ display: "flex", gap: "148px", alignItems: "center", marginBottom: "80px" }}>
            <Accardion faqList={trimmedFaqList} />
            <div><img src={personFaq} alt="personFaq" /></div>
         </div>
         <Organizations />
         <ContactSection/>
      </section>
   );
};
