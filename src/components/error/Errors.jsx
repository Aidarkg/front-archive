import notFoundImage from '../../assets/images/404 Page Not Found 1 (1) 1.png';
import classes from "./Errors.module.sass";
import {Container} from "../container/Container.jsx";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomButton} from "../../UI/customButton/CustomButton.jsx";
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
                    <div>
                        <CustomButton>

                        </CustomButton>
                        <CustomButton>

                        </CustomButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};
