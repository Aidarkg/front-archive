import classes from "./Publications.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomCard} from "../../ui/customCard/CustomCard.jsx";
import img from "../../assets/images/japarov.webp";
import {useNavigate} from "react-router-dom";

const publicationContent = [
    {
        id:1,
        title: " йцукенгшщСадыр Жапаров выпустил приказ по созданию общегосударственной архивной уцыквеанпгшр",
        image: img,
        date: "12.09.2023",
    },

    {
        id:2,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
    },
    {
        id:3,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id:4,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id:5,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id:6,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id:7,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id: 8,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id: 9,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id: 10,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id:11,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        id: 12,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
];
export const Publications = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className="container">
                <div className={classes.Publications}>
                    <Typography variant="h1">Публикации</Typography>
                    <div className={classes.PublicationsContent}>
                        {publicationContent&& publicationContent.map((item, index) => (
                            <div className={classes.PublicationsContentCard}
                                 key={index}>
                                <CustomCard
                                    image={item.image}
                                    date={item.date}
                                    description={item.title}
                                    imageCount={item.imageCount}
                                    isLargeCard={index === 0}
                                    onClick={() => navigate(`/publications/${item.id}`)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};