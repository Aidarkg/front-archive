import classes from "./Container.module.sass";
export const Container = ({children}) => {
    return (
        <div className={classes.container}>{children}</div>
    );
};