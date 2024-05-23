import { Link } from "react-router-dom";
import s from "./CustomButton.module.sass";
import { Typography } from "../../Typography/Typography.jsx";

const buttonStyles = {
    blue: s.customButtonBlue,
    lightBlue: s.customButtonLightBlue,
    withBorder: s.customButtonWithBorder
};

export const CustomButton = ({ text, icon, to, onClick, actionType, buttonStyle, type, style, disabled, className }) => {
    const ButtonComponent = actionType === "link" ? Link : "button";
    const buttonClassName = `${s.customButton} ${buttonStyles[buttonStyle] || s.customButtonGrey} ${className}`;
    const typeProps = actionType === "link" ? { to } : { onClick, type, disabled };

    return (
        <ButtonComponent disabled={disabled} {...typeProps} className={`${s.customButton} ${buttonClassName}`} style={style}>
            <Typography variant="h6">{text.toUpperCase()}</Typography>
            {icon && icon}
        </ButtonComponent>
    );
};
