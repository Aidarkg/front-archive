import classes from "./Errors.module.sass";

import notFoundImage from '../../assets/images/404 Page Not Found 1 (1) 1.png';
import {Container} from "../../components/container/Container.jsx";
import {Typography} from "../Typography/Typography.jsx";
import {CustomButton} from "../customButton/CustomButton.jsx";
import {PATH} from "../../utils/constants/Constants.js";
import {ArrowLeft} from "../../assets/icons/ArrowLeft.jsx";
import {useTranslation} from "react-i18next";

export const Errors = () => {
    const {t} = useTranslation();
    return (
        <section>
            <Container>
                <div className={classes.error}>
                    <div>
                        <img className={classes.errorIMG} src={notFoundImage} alt="404 Page Not Found"/>
                    </div>
                    <Typography variant="h1" color="blue500">
                        {t("errorPage.pageNotFound")}
                    </Typography>
                    <div className={classes.errorButtons}>
                        <CustomButton
                            className={classes.btn}
                            text={t("errorPage.toMain")}
                            actionType="link"
                            to={PATH.main}
                            buttonStyle={"blue"}
                        />
                        <CustomButton
                            icon={<ArrowLeft/>}
                            className={classes.btn}
                            text={t("errorPage.back")}
                            actionType="link"
                            to={-1}
                        />

                    </div>
                </div>
            </Container>
        </section>
    );
};
