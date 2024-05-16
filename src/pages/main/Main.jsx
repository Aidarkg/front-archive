import { Banner } from "../../components/banner/Banner.jsx";
import { faqList } from "../FAQ/scripts/AccardionMenu.jsx";
import personFaq from "../../pages/FAQ/img/personFaq.svg";
import { Accardion } from "../../ui/Accordion/Accordion.jsx";
import {CustomButton} from "../../ui/customButton/CustomButton.jsx";

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
         <div className="container" style={{ display: "flex", gap: "148px"}}>
            <Accardion faqList={trimmedFaqList} />
            <img style={{marginTop: "80px",}} src={personFaq} alt="personFaq" />
         </div>
      </section>
   );
};
