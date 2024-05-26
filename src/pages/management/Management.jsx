import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import { Typography } from "../../Typography/Typography.jsx";
import classes from "./Managment.module.sass";
import { useEffect } from "react";
import { useData } from "./store/Store.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {Container} from "../../components/container/Container.jsx";

export const Management = () => {
    const { data, loading, error, getData } = useData();
    useEffect(() => {
        getData();
    }, [getData]);
    if (loading) {
        return <Loader/>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section>
           <Container>
                <Breadcrumbs currentPage={"услуги"} />
                <Typography className={classes.heading} variant="h1" color="blue500">
                    Руководство
                </Typography>
                <div className={classes.management}>
                    {
                        data.results &&  data?.results.map((item) =>(
                            <div className={classes.managementCard} key={item.id}>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={classes.managementCardContent}>
                                    <Typography variant="h6">{item.full_name}</Typography>
                                    <Typography variant="smallBody" color="grey500">{item.position}</Typography>
                                    <Typography variant="extraSmallBody" color="grey400" >с 2017 по 2024</Typography>
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
           </Container>
        </section>
    );
};
