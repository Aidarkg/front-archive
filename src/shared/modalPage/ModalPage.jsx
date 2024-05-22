import {Modal} from "../modal/Modal.jsx";
import {useState} from "react";
import classes from "./ModalPage.module.sass";
import {CustomButton} from "../../ui/customButton/CustomButton.jsx";
import {QuestionLine} from "../../assets/icons/QuestionLine.jsx";
export const ModalPage = () => {
    const [ modalActive, setModalActive ] = useState(false);
    return (
        <div>
            <div className="container">
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
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};