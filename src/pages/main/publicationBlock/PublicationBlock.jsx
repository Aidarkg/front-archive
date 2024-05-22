import classes from "./PublicationBlock.module.sass";
import {Typography} from "../../../Typography/Typography.jsx";
import {CustomCard} from "../../../ui/customCard/CustomCard.jsx";
import {CustomButton} from "../../../ui/customButton/CustomButton.jsx";
import {ArrowRight} from "../../../assets/icons/ArrowRight.jsx";
import {useNavigate} from "react-router-dom";

export const PublicationBlock = ({ title, contentArray, path, linkText, type }) => {
    const navigate=useNavigate();
    return (
        <div className={classes.publicationBlock}>
            <Typography variant="h2">{title}</Typography>
            <div className={classes.publicationBlockContent}>
                {contentArray.map((item, index) => (
                    <CustomCard
                        key={index}
                        image={item.image}
                        description={item.description}
                        imageCount={item.imageCount}
                        date={item.date}
                        onClick={()=>navigate(`/${type}/${item.id}`)}
                    />
                ))}
            </div>
            <CustomButton
                text={linkText}
                actionType="link"
                to={path}
                icon={<ArrowRight/>}
            />
        </div>
    );
};