import classes from "./Loader.module.sass";

export const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes["lds-default"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
