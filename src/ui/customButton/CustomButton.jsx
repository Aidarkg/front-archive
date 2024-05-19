import { Link } from "react-router-dom";
import s from "./CustomButton.module.sass";
import { Typography } from "../../Typography/Typography.jsx";

const buttonStyles = {
    blue: s.customButtonBlue,
    lightBlue: s.customButtonLightBlue,
    withBorder: s.customButtonWithBorder
};

export const CustomButton = ({ text, icon, to, onClick, actionType, buttonStyle, type, style}) => {
    const ButtonComponent = actionType === "link" ? Link : "button";
    const buttonClassName = buttonStyles[buttonStyle] || s.customButtonGrey;
    const typeProps = actionType === "link" ? { to } : { onClick, type };

    return (
        <ButtonComponent {...typeProps} className={`${s.customButton} ${buttonClassName}`} style={style}>
            <Typography variant="h6">{text.toUpperCase()}</Typography>
            {icon && icon}
        </ButtonComponent>
    );
};

