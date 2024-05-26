import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import { Typography } from "../../Typography/Typography.jsx";
import classes from "./Managment.module.sass";
import { useEffect } from "react";
import { useData } from "./store/Store.jsx";

export const Management = () => {
    const { data, loading, error, getData } = useData();
    // console.log(data?.results, "ooooooooooooo");
    useEffect(() => {
        getData();
    }, [getData]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className={classes.management}>
            <div className="container">
                <Breadcrumbs currentPage={"услуги"} />
                <Typography className={classes.heading} variant="h1" color="blue500">
                    Руководство
                </Typography>
                <div className={classes.managementCard}>
                    {
                        data.results &&  data?.results.map((item, index) =>(
                            <div key={index}>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={classes.managementCardContent}>
                                    <Typography variant="h6">{item.full_name}</Typography>
                                    <Typography variant="body" >{item.position}</Typography>
                                    <Typography variant="span">{item.birth_date}</Typography>
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    );
};
