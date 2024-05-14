import { Link } from "react-router-dom";
import s from "./CustomButton.module.sass";
import { Typography } from "../../Typography/Typography.jsx";


export const CustomButton = ({ text, icon, to, onClick, actionType, buttonStyle, type }) => {
    const ButtonComponent = actionType === "link" ? Link : "button";
    let buttonClassName;
    switch (buttonStyle) {
        case "blue":
            buttonClassName = s.customButtonBlue;
            break;
        case "lightBlue":
            buttonClassName = s.customButtonLightBlue;
            break;
        case "withBorder":
            buttonClassName = s.customButtonWithBorder;
            break;
        default :
            buttonClassName = s.customButtonGrey;

    }
    return (
        <ButtonComponent to={to} onClick={onClick} type={type} className={`${s.customButton} ${buttonClassName}`}>
            <Typography variant="h6"> {text}</Typography>
            {icon &&
                <img src={icon} alt="icon"/>
            }
        </ButtonComponent>
    );
};

