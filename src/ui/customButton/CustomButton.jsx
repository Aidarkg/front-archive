import { Link } from "react-router-dom";
import classes from "./CustomButton.module.sass";
import { Typography } from "../../Typography/Typography.jsx";

const buttonStyles = {
    blue: classes.customButtonBlue,
    lightBlue: classes.customButtonLightBlue,
    withBorder: classes.customButtonWithBorder
};

export const CustomButton = ({ text, icon, to, onClick, actionType, buttonStyle, type, style, disabled}) => {
    const ButtonComponent = actionType === "link" ? Link : "button";
    const buttonClassName = buttonStyles[buttonStyle] || classes.customButtonGrey;
    const typeProps = actionType === "link" ? { to } : { onClick, type, disabled};

    return (
        <ButtonComponent {...typeProps} className={`${classes.customButton} ${buttonClassName}`} style={style} >
            <Typography variant="h6">{text.toUpperCase()}</Typography>
            {icon && icon}
        </ButtonComponent>
    );
};

