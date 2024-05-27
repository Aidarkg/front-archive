import classes from "./DetailPublication.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import img from "../../assets/images/japarov.webp";
import {usePublications} from "../publications/api/PublicationsStore.js";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";

export const DetailPublication = () => {

    const {id} = useParams();

    const {publication, getPublicationFromId} = usePublications(state => ({
        publication: state.detailPublicationInfo,
        getPublicationFromId: state.getPublicationFromId
    }));

    useEffect(() => {
        getPublicationFromId(id);
    }, [id]);
    return (
        <section className={classes.detailPublication}>
            <div className="container">
                <Breadcrumbs currentPage={"публикации"} parentPageLink={"/publications"}/>
                <div className={classes.detailPublicationInner}>
                    <Typography variant="h1">Публикации</Typography>
                    <div className={classes.detailPublicationContent}>
                        <div className={classes.detailPublicationTitle}>
                            <Typography variant="h2">{publication.title}</Typography>
                        </div>
                        <div className={classes.detailPublicationContentInner}>
                            <Typography>{publication.description}</Typography>
                            <div>
                                <img src={publication.image} alt={publication.title}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
