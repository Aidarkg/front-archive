import classes from "./Managment.module.sass";
import { Typography } from "../../Typography/Typography.jsx";

import { Container } from "../../components/container/Container.jsx";

import { useEffect } from "react";
import { useData } from "./store/Store.jsx";
import { useNavigate } from "react-router-dom";

import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {useTranslation} from "react-i18next";
export const Management = () => {
    const { t } = useTranslation();
    const { data, getData } = useData();
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/managementMore/${id}`);
    };

    useEffect(() => {
        getData();
    }, [getData]);


    return (
        <section>
            <Container>
                <Breadcrumbs currentPage={"руководство"} />
                <Typography className={classes.heading} variant="h1" color="blue500">
                    Руководство
                </Typography>
                <div className={classes.management}>
                    {data?.results && data?.results.map((item) => (
                        <div
                            className={classes.managementCard}
                            key={item.id}
                            onClick={() => handleCardClick(item.id)}
                        >
                            <div>
                                <img src={item.image} alt={item.full_name} />
                            </div>
                            <div className={classes.managementCardContent}>
                                <Typography variant="h6">{item.full_name}</Typography>
                                <Typography variant="smallBody" color="grey500">{item.position}</Typography>
                                <Typography variant="extraSmallBody" color="grey400">
                                    {`с ${item.start_year} по ${item.end_year}`}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
