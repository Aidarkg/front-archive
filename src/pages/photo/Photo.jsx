import {Typography} from "../../Typography/Typography.jsx";
import classes from "./Photo.module.sass";
import akaev from "../../assets/images/akaev.png";
import img from "../../assets/images/japarov.webp";
import {CustomPhoto} from "../../ui/customPhoto/CustomPhoto.jsx";
import {CustomCard} from "../../ui/customCard/CustomCard.jsx";
import {useNavigate} from "react-router-dom";

const archiveImages = [
    { image: akaev },
    { image: akaev },
    { image: akaev },
    { image: akaev },
    { image: akaev },
];
const imageContent = [
    {
        id:1,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:2,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:3,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:4,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:5,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:6,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:7,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:8,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:9,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
];
export const Photo = () => {
    const navigate=useNavigate();
    return (
        <section>
            <div className="container">
                <div className={classes.photo}>
                    <Typography variant="h1">Фото</Typography>
                    <div className={classes.photoArchive}>
                        {archiveImages&& archiveImages.map((image, index) => (
                            <CustomPhoto
                                key={index}
                                image={image.image}
                                isLarge={index === 2}
                                style={getStyleForIndex(index)}
                            />
                        ))}
                    </div>
                    <div className={classes.photoContent}>
                        {imageContent&& imageContent.map((item, index) => (
                            <CustomCard
                                key={index}
                                image={item.image}
                                date={item.date}
                                description={item.description}
                                imageCount={item.imageCount}
                                onClick={() => navigate(`/photo/${item.id}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const getStyleForIndex = (index) => {
    switch (index) {
        case 0:
            return { gridColumn: "1 / 2", gridRow: "1 / 2" };
        case 1:
            return { gridColumn: "1 / 2", gridRow: "2 / 3" };
        case 2:
            return { gridColumn: "2 / 4", gridRow: "1 / 3" };
        case 3:
            return { gridColumn: "4 / 5", gridRow: "1 / 2" };
        case 4:
            return { gridColumn: "4 / 5", gridRow: "2 / 3" };
        default:
            return {};
    }
};