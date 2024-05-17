import s from "./Publications.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomCard} from "../../ui/customCard/CustomCard.jsx";
import img from "../../assets/images/japarov.webp";

const publicationContent = [
    {
        description: " йцукенгшщСадыр Жапаров выпустил приказ по созданию общегосударственной архивной уцыквеанпгшр",
        image: img,
        date: "12.09.2023",
    },

    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
    },

];
export const Publications = () => {
    return (
        <section>
            <div className="container">
                <div className={s.Publications}>
                    <Typography variant="h1">Публикации</Typography>
                    <div className={s.PublicationsContent}>
                        {publicationContent&& publicationContent.reverse().map((item, index) => (
                            <CustomCard
                                key={index}
                                image={item.image}
                                date={item.date}
                                description={item.description}
                                imageCount={item.imageCount}
                                isLargeCard={index === 0}
                                gridColumn={index === 0 ? "span 2" : "auto"}
                                gridRow={index === 0 ? "span 2" : "auto"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};