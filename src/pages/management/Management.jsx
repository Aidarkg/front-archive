import classes from "./Managment.module.sass";
import { Typography } from "../../Typography/Typography.jsx";

import { Container } from "../../components/container/Container.jsx";
import { Loader } from "../../components/loader/Loader.jsx";

import { useEffect } from "react";
import { useData } from "./store/Store.jsx";
import { useNavigate } from "react-router-dom";

import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";

export const Management = () => {

    const { data, loading, error, getData } = useData();
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/managementMore/${id}`);
    };

    useEffect(() => {
        getData();
    }, [getData]);
    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
