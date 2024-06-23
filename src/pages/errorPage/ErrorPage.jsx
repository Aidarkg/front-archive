import classes from "./ErrorPage.module.sass";

import notFoundImage from '../../assets/images/BugFixing.webp';
import {Container} from "../../components/container/Container.jsx";
import {Typography} from "../../UI/Typography/Typography.jsx";
import {CustomButton} from "../../UI/customButton/CustomButton.jsx";
import {ArrowLeftWhite} from "../../assets/icons/ArrowLeftWhite.jsx";
import {useTranslation} from "react-i18next";
export const ErrorPage = () => {
    const {t} = useTranslation();
    return (
        <section>
            <Container>
                <div className={classes.error}>
                    <div>
                        <img className={classes.errorIMG} src={notFoundImage} alt="Bug Fixing Error"/>
                    </div>
                    <Typography variant="h1" color="blue500">
                        Портал временно недоступен
                    </Typography>
                    <Typography variant="h4" color="blue500" className={classes.errorText}>
                        По техническим причинам портал временно недоступен. Приносим извинения за неудобства.
                    </Typography>
                    <div className={classes.errorButtons}>
                        <CustomButton
                            icon={<ArrowLeftWhite/>}
                            className={classes.btn}
                            text={t("errorPage.back")}
                            actionType="link"
                            to={-1}
                            buttonStyle={"blue"}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
