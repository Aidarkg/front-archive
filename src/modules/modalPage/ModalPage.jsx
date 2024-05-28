import classes from "./ModalPage.module.sass";

import {CustomButton} from "../../UI/customButton/CustomButton.jsx";
import {useState} from "react";
import {QuestionLine} from "../../assets/icons/QuestionLine.jsx";
import {Modal} from "./modal/Modal.jsx";
import {Container} from "../../components/container/Container.jsx";

export const ModalPage = () => {
    const [ modalActive, setModalActive ] = useState(false);
    return (
        <div>
            <Container>
                <div className={classes.card}>
                    <CustomButton
                        buttonStyle="blue"
                        type="submit"
                        text={"ЗАДАТЬ ВОПРОС"}
                        className={classes.openBtn}
                        onClick={() => setModalActive(true)}
                        icon={<QuestionLine/>}
                    />
                </div>
            </Container>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};