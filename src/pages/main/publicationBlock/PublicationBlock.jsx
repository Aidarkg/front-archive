import s from "./PublicationBlock.module.sass";
import {Typography} from "../../../Typography/Typography.jsx";
import {CustomCard} from "../../../ui/customCard/CustomCard.jsx";
import {CustomButton} from "../../../ui/customButton/CustomButton.jsx";
import {ArrowRight} from "../../../assets/icons/ArrowRight.jsx";

export const PublicationBlock = ({ title, contentArray, path, linkText }) => {
    return (
        <div className={s.publicationBlock}>
            <Typography variant="h2">{title}</Typography>
            <div className={s.publicationBlockContent}>
                {contentArray.map((item, index) => (
                    <CustomCard
                        key={index}
                        image={item.image}
                        description={item.description}
                        imageCount={item.imageCount}
                        date={item.date}
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