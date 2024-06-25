import { ContentBlocks } from "../../aboutArchive/contentBlocks/ContentBlocks";
import { useTranslation } from "react-i18next";
import classes from ".././mainAboutArchive/MainAboutArchive.module.sass";
import {Container} from "../../../components/container/Container.jsx";
import {useAboutArchive} from "../../aboutArchive/store/useAboutArchive.js";
import {useEffect} from "react";
import {Loader} from "../../../components/loader/Loader.jsx";
import {ErrorPage} from "../../errorPage/ErrorPage.jsx";

export const MainAboutArchive = () => {
   const {  i18n } = useTranslation();
   const {aboutArchiveContent, loading, error, getAboutArchive }=useAboutArchive();
   useEffect(() => {
      getAboutArchive(i18n.language);
   }, [i18n.language]);
   if (loading) {
      return <Loader />;
   }
   if (error) {
      return <ErrorPage/>;
   }
   return (
      <section>
         <Container>
            <div className={classes.content}>
               {aboutArchiveContent.slice(0, 1).map((item, index) => (
                   <ContentBlocks heading={item.title} text={item.description} image={item.photo} key={index} className={classes.main} isMain={true}/>
               ))}
            </div>
         </Container>
      </section>
   );
};
