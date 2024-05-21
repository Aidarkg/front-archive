import {Typography} from "../../Typography/Typography.jsx";
import classes from "./Photo.module.sass";
import akaev from "../../assets/images/akaev.png";
import img from "../../assets/images/japarov.webp";
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
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:2,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:3,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:4,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:5,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:6,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:7,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:8,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:9,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
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
                            <div className={classes.photoArchiveImage} key={index}>
                                <img src={image.image} alt="img" />
                            </div>
                        ))}
                    </div>
                    <div className={classes.photoContent}>
                        {imageContent&& imageContent.map((item, index) => (
                            <CustomCard
                                key={index}
                                image={item.image}
                                date={item.date}
                                description={item.title}
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

