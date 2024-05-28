import classes from "./DetailPublication.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {usePublications} from "../publications/api/PublicationsStore.js";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Loader} from "../../components/loader/Loader.jsx";

export const DetailPublication = () => {

    const {id} = useParams();
    const {detailPublicationInfo, getPublicationFromId, loading} = usePublications();

    useEffect(() => {
        getPublicationFromId(id);
    }, [id]);

    if (loading) {
        return <Loader/>
    }
    return (
        <section className={classes.detailPublication}>
            <Container>
                <Breadcrumbs currentPage={"публикации"} parentPageLink={"/publications"}/>
                <div className={classes.detailPublicationInner}>
                    <Typography variant="h1">Публикации</Typography>
                    <div className={classes.detailPublicationContent}>
                        <div className={classes.detailPublicationTitle}>
                            <Typography variant="h2">{detailPublicationInfo.title}</Typography>
                        </div>
                        <div className={classes.detailPublicationContentInner}>
                            <Typography className={classes.detailPublicationDescr}>{detailPublicationInfo.description}</Typography>
                            <div className={classes.detailPublicationImage}>
                                <img src={detailPublicationInfo.image} alt={detailPublicationInfo.title}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
