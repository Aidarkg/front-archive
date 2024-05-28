import classes from "./Publications.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomCard} from "../../UI/customCard/CustomCard.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {usePublications} from "./api/PublicationsStore.js";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {useTranslation} from "react-i18next";


export const Publications = () => {

    const navigate = useNavigate();
    const {t} =useTranslation();
    const {publications, getPublications, loading} = usePublications();

    useEffect(() => {
        getPublications();
    }, []);

    if (loading) {
        return <Loader/>
    }

    return (
        <section>
            <Container>
                <Breadcrumbs currentPage={t("mainPage.publications.title")}/>
                <div className={classes.Publications}>
                    <Typography variant="h1">{t("mainPage.publications.title")}</Typography>
                    <div className={classes.PublicationsContent}>
                        {publications && publications?.map((item, index) => (
                            <div className={classes.PublicationsContentCard}
                                 key={item.id}>
                                <CustomCard
                                    image={item.image}
                                    date={item.public_date}
                                    title={item.title}
                                    isLargeCard={index === 0}
                                    onClick={() => navigate(`/publications/${item.id}`)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};