import s from "./customLink.module.sass";
import {Link} from "react-router-dom";

export const CustomLink = ({link, customLinkText}) => {
    return (
        <Link to={link} className={s.customLink}>{customLinkText}</Link>
    );
};

