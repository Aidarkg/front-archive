import { Typography } from '../../../Typography/Typography.jsx';
import s from "./MessageTextarea.module.sass";

export const MessageTextarea = ({
    id,
    placeholder,
    register,
    errors,
    label,
    characterCount,
    handleTextareaChange,
    maxLength
}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea
                maxLength={maxLength}
                id={id}
                placeholder={placeholder}
                {...register}
                onChange={handleTextareaChange}
            />
            <Typography className={s.counter} variant="span"  color="grey500">
                {`${characterCount}/300`}
            </Typography>
            <Typography className={s.errors}>
                {errors?.message && errors.message}
            </Typography>
        </div>
    );
};
