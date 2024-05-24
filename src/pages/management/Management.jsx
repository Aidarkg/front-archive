import {Breadcrumbs} from "../../UI/breadcrumbs/Breadcrumbs.jsx";
import {Typography} from "../../Typography/Typography.jsx";
import classes from "./Managment.module.sass";
import {useEffect} from "react";
import {useData} from "./store/Store.jsx";

export const Management = () => {
    const { data, loading, error, getData} = useData();
    useEffect(() => {
        getData();
    }, [getData]);
    if (loading) {
        return loading;
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
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
