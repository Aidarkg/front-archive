import classes from './SuccessModal.module.sass';
import {CustomButton} from "../../../UI/customButton/CustomButton.jsx";

export const SuccessModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modalContent}>
                <div className={classes.checkmarkWrapper}>
                    <svg className={classes.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <path className={classes.checkmarkCheck} fill="none" d="M14 27l10 10L38 18"/>
                    </svg>
                </div>
                <p>Вопрос успешно отправлен</p>
                <CustomButton
                    className={classes.closeButton}
                    text="Закрыть"
                    onClick={onClose}
                    buttonStyle="blue"
                    type="button"
                />
            </div>
        </div>
    );
};
