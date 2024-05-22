import classes from "./Modal.module.sass";
import {QuestionForm} from "../../pages/FAQ/questionForm/QuestionForm.jsx";
export const Modal = () => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalContent}>
                <div>
                    <QuestionForm/>
                </div>
            </div>
        </div>
    );
};