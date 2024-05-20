import s from "./MainGallery.module.sass";
import {PublicationBlock} from "../publicationBlock/PublicationBlock.jsx";
import img from "../../../assets/images/japarov.webp";

const publicationContent = [
    {   id: "1",
        description: " publicationContent " +
            "1Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023"
    },
    {   id: 2,
        description: "2publicationContent Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023"
    },
    {
        description: " publicationContent Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023"
    },
    {
        description: " publicationContent Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023"
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023"
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023"
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023"
    },
    {
        description: " йцукенгшщзх Бабанов бабанов бабанов бабанов бабанлвчсмишщозлхйцукенгшщдльтим",
        image: img,
        date: "12.09.2023"
    },
];
const imageContent = [
    {   id:1,
        description: " 123456Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10,
    },
    {   id: 2,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id:3,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 4,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id:5,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 6,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 7,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 8,
        description: " йцукенгшщзх Бабанов бабанов бабанов бабанов бабанлвчсмишщозлхйцукенгшщдльтим",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
];
const videoContent = [
    {   id: 1,
        description: " 123456Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 2,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 3,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 4,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 5,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 6,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 7,
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {   id: 8,
        description: " йцукенгшщзх Бабанов бабанов бабанов бабанов бабанлвчсмишщозлхйцукенгшщдльтим",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
];
const getFirstFourItems = (array) => array.slice(0, 4);
const sections = [
    {
        title: "Публикации",
        content: getFirstFourItems(publicationContent),
        path: "/publications",
        linkText: "Все публикации",
        type: "publications"
    },
    {
        title: "Фотогалерея",
        content: getFirstFourItems(imageContent),
        path: "/photo",
        linkText: "Все фотографии",
        type: "photo"
    },
    {
        title: "Видеогалерея",
        content: getFirstFourItems(videoContent),
        path: "/video",
        linkText: "Все видео",
        type: "video"
    }
];

export const MainGallery = () => {
    return (
        <section className={s.gallery}>
            <div className="container">
                <div className={s.galleryInner}>
                    {sections.map((section, index) => (
                        <PublicationBlock
                            key={index}
                            contentArray={section.content}
                            title={section.title}
                            path={section.path}
                            linkText={section.linkText}
                            type={section.type}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};