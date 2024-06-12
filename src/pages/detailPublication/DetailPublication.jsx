import classes from "./DetailPublication.module.sass";
import {Typography} from "../../UI/Typography/Typography.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {usePublications} from "../publications/api/PublicationsStore.js";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {useTranslation} from "react-i18next";
import {useLanguageStore} from "../../utils/languageStore/UseLanguageStore.js";

export const DetailPublication = () => {

    const {id} = useParams();
    const {detailPublicationInfo, getPublicationFromId, loading} = usePublications();
    const {t, i18n} = useTranslation();

    useEffect(() => {
        getPublicationFromId(id, i18n.language);
    }, [id, i18n.language]);

    return (
        <section className={classes.detailPublication}>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.publications.title")} parentPageLink={"/publications"}/>
                <div className={classes.detailPublicationInner}>
                    {loading && <Loader/>}
                    <Typography variant="h1">{t("mainPage.publications.title")}</Typography>
                    <div className={classes.detailPublicationContent}>
                        <div className={classes.detailPublicationTitle}>
                            <Typography variant="h2">{detailPublicationInfo?.title}</Typography>
                        </div>
                        <div className={classes.detailPublicationContentInner}>
                            <Typography
                                className={classes.detailPublicationDescr}>{detailPublicationInfo?.description}</Typography>
                            <div className={classes.detailPublicationImage}>
                                <img src={detailPublicationInfo?.image} alt={detailPublicationInfo?.title}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
