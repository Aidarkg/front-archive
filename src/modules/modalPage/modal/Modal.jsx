import classes from "./Modal.module.sass";
import {QuestionForm} from "../../../UI/questionForm/QuestionForm.jsx";
export const Modal = ({ active, setActive }) => {


    return (
        <div className={`${classes.modal} ${active ? classes.active : ''}`} onClick={() => setActive(false)}>
            <div className={`${classes.modalContent} ${active ? classes.active : ''}`} onClick={e => e.stopPropagation()}>
                <div>
                    <QuestionForm/>
                </div>
            </div>
        </div>
    );
};