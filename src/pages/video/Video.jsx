import s from "./Video.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomCard} from "../../ui/customCard/CustomCard.jsx";
import img from "../../assets/images/japarov.webp";
import {useNavigate} from "react-router-dom";

const videoContent = [
    {   id: 1,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {   id: 2,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {   id:3,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {   id: 4,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {   id: 5,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
    {   id: 6,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        video: img,
        date: "12.09.2023",
        imageCount: 23
    },
];
export const Video = () => {
    const navigate=useNavigate();
    return (
        <section>
            <div className="container">
                <div className={s.video}>
                    <Typography variant="h1">Видео</Typography>
                    <div className={s.videoContent}>
                        {videoContent&& videoContent.map((item, index) => (
                            <CustomCard
                                key={index}
                                image={item.video}
                                date={item.date}
                                description={item.title}
                                imageCount={item.imageCount}
                                onClick={()=>navigate(`/video/${item.id}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};