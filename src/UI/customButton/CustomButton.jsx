import { Link } from "react-router-dom";
import classes from "./CustomButton.module.sass";
import { Typography } from "../../Typography/Typography.jsx";

const buttonStyles = {
    blue: classes.customButtonBlue,
    lightBlue: classes.customButtonLightBlue,
    withBorder: classes.customButtonWithBorder
};

export const CustomButton = ({ text, icon, to, onClick, actionType, buttonStyle, type, style, disabled, className, target, rel}) => {
    const ButtonComponent = actionType === "link" ? Link : "button";
    const buttonClassName = `${classes.customButton} ${buttonStyles[buttonStyle] || classes.customButtonGrey} ${className}`;
    const typeProps = actionType === "link" ? { to, target, rel } : { onClick, type, disabled };


    return (
        <ButtonComponent disabled={disabled} {...typeProps} className={`${classes.customButton} ${buttonClassName}`} style={style}>
            <Typography variant="h6">{text.toUpperCase()}</Typography>
            {icon && icon}
        </ButtonComponent>
    );
};
