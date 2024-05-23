import {Breadcrumbs} from "../../ui/breadcrumbs/Breadcrumbs.jsx";
import {Typography} from "../../Typography/Typography.jsx";
import classes from "./Managment.module.sass";

export const Management = () => {
    return (
        <section>
            <div className="container">
                <Breadcrumbs currentPage={"услуги"} />
                <Typography className={classes.heading} variant="h1" color="blue500">
                    Руководство
                </Typography>
            </div>
        </section>
    );
};