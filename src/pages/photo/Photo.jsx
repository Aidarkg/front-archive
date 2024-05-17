import {Typography} from "../../Typography/Typography.jsx";
import s from "./Photo.module.sass";
import akaev from "../../assets/images/akaev.png";
import img from "../../assets/images/japarov.webp";
import {ArchivePhoto} from "./archivePhoto/ArchivePhoto.jsx";
import {CustomCard} from "../../ui/customCard/CustomCard.jsx";

const archiveImages = [
    { image: akaev },
    { image: akaev },
    { image: akaev },
    { image: akaev },
    { image: akaev },
];
const imageContent = [
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        description: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
    {
        description: " йцукенгшщзх Бабанов бабанов бабанов бабанов бабанлвчсмишщозлхйцукенгшщдльтим",
        image: img,
        date: "12.09.2023",
        imageCount: 10
    },
];
export const Photo = () => {
    return (
        <section>
            <div className="container">
                <div className={s.photo}>
                    <Typography variant="h1">Фото</Typography>
                    <div className={s.photoArchive}>
                        {archiveImages.map((image, index) => (
                            <ArchivePhoto
                                key={index}
                                image={image.image}
                                isLarge={index === 2}
                                style={getStyleForIndex(index)}
                            />
                        ))}
                    </div>
                    <div className={s.photoContent}>
                        {imageContent.reverse().map((item, index) => (
                            <CustomCard
                                key={index}
                                image={item.image}
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