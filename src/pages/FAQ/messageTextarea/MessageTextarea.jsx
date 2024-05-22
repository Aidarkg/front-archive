import { Typography } from "../../../Typography/Typography.jsx";
import s from "./MessageTextarea.module.sass";

export const MessageTextarea = ({
    id,
    placeholder,
    register,
    errors,
    label,
    characterCount,
    handleTextareaChange,
    maxLength,
    ...rest
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
                {...rest}
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
// import { forwardRef } from "react";
// import { Typography } from "../../../Typography/Typography.jsx";
// import classes from "./MessageTextarea.module.sass";
//
// export const MessageTextarea = forwardRef(({
//                                                id,
//                                                placeholder,
//                                                errors,
//                                                label,
//                                                maxLength,
//                                                characterCount,
//                                                handleTextareaChange,
//                                                register,
//                                                ...rest
//                                            }, ref) => {
//     return (
//         <div>
//             <label htmlFor={id}>{label}</label>
//             <textarea
//                 maxLength={maxLength}
//                 id={id}
//                 placeholder={placeholder}
//                 {...register} // Register directly applied
//                 onChange={(e) => {
//                     handleTextareaChange(e); // Update character count
//                     register.onChange(e); // Ensure react-hook-form handles change
//                 }}
//                 ref={ref}
//                 {...rest}
//             />
//             <Typography className={classes.counter} variant="span" color="grey500">
//                 {`${characterCount}/${maxLength}`}
//             </Typography>
//             <Typography className={classes.errors}>
//                 {errors?.message && errors.message}
//             </Typography>
//         </div>
//     );
// });
//
// MessageTextarea.displayName = "MessageTextarea";
