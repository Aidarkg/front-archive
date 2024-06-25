import classes from "./AboutArchive.module.sass";
import { useTranslation } from "react-i18next";
import {Container} from "../../components/container/Container.jsx";
import {ContentBlocks} from "./contentBlocks/ContentBlocks.jsx";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Typography} from "../../UI/Typography/Typography.jsx";
import {useAboutArchive} from "./store/useAboutArchive.js";
import {useEffect} from "react";
import {Loader} from "../../components/loader/Loader.jsx";
import {ErrorPage} from "../errorPage/ErrorPage.jsx";

export const AboutArchive = () => {
   const { t, i18n } = useTranslation();
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
             <Breadcrumbs currentPage={t("header&footer.subnav.aboutArchive")}/>
             <div className={classes.aboutArchive}>
                <Typography variant={"h1"}>{t("header&footer.subnav.aboutArchive")}</Typography>
                {
                    aboutArchiveContent?.map((item, index)=>(
                       <ContentBlocks heading={item.title} text={item.description} image={item.photo} key={index} index={index}/>
                   ))
                }
             </div>
          </Container>
       </section>
   );
};
