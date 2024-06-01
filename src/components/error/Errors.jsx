import classes from "./Errors.module.sass";

import notFoundImage from '../../assets/images/404 Page Not Found 1 (1) 1.png';
import {Container} from "../container/Container.jsx";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomButton} from "../../UI/customButton/CustomButton.jsx";
import {PATH} from "../../app/Router/index.js";
import {ArrowLeft} from "../../assets/icons/ArrowLeft.jsx";
export const Errors = () => {
    return (
        <section>
            <Container>
                <div className={classes.error}>
                    <div>
                        <img className={classes.errorIMG} src={notFoundImage} alt="404 Page Not Found"/>
                    </div>
                    <Typography variant="h1" color="blue500">
                        Страница не найдена
                    </Typography>
                    <div className={classes.errorButtons}>
                        <CustomButton
                            className={classes.btn}
                            text={"на главную"}
                            actionType="link"
                            to={PATH.main}
                            buttonStyle={"blue"}
                        />
                        <CustomButton
                            icon={<ArrowLeft/>}
                            className={classes.btn}
                            text={"назад"}
                            actionType="link"
                            to={-1}
                        />

                    </div>
                </div>
            </Container>
        </section>
    );
};
