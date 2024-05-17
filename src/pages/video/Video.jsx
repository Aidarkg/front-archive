import s from "./Video.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomCard} from "../../ui/customCard/CustomCard.jsx";
import img from "../../assets/images/japarov.webp";

const videoContent = [
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
];
export const Video = () => {
    return (
        <section>
            <div className="container">
                <div className={s.video}>
                    <Typography variant="h1">Видео</Typography>
                    <div className={s.videoContent}>
                        {videoContent&& videoContent.reverse().map((item, index) => (
                            <CustomCard
                                key={index}
                                image={item.video}
                                date={item.date}
                                description={item.description}
                                imageCount={item.imageCount}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};