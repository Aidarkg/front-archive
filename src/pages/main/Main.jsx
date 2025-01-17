import { Banner } from "../../modules/banner/Banner.jsx";
import personFaq from "../../pages/FAQ/img/personFaq.svg";
import { Accardion } from "../../modules/Accordion/Accordion.jsx";
import { MainGallery } from "./mainGallery/MainGallery.jsx";
import { Organizations } from "./organizations/Organizations.jsx";
import ContactSection from "../../modules/contactSection/ContactSection.jsx";
import { MainAboutArchive } from "./mainAboutArchive/MainAboutArchive.jsx";
import classes from "../../modules/Accordion/AccardionItem.module.sass";
import {Container} from "../../components/container/Container.jsx";

export const Main = () => {
   return (
      <section>
         <Banner />
         <MainAboutArchive />
         <MainGallery />
         <Container>
             <div className={classes.accardionPage}>
                 <Accardion useSlicedFaqs={true} />
                 <div className={classes.imgAccardion}>
                     <img src={personFaq} alt="personFaq" />
                 </div>
             </div>
         </Container>
         <Organizations />
         <ContactSection />
      </section>
   );
};
