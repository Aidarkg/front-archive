import notFoundImage from '../../assets/images/404 Page Not Found 1 (1) 1.png';
import classes from "./Errors.module.sass";
export const Errors = () => {
    return (
        <div>
            <img className={classes.img} src={notFoundImage} alt="404 Page Not Found"/>
        </div>
    );
};
