import {GalleryBlock} from "./components/galleryBlock/GalleryBlock.jsx";
import s from "./gallery.module.sass";
import img from "./images/japarov.webp";

export const Gallery = () => {

    //представим что нам с бэка прилетают данные
    const galleryContent = [
        {
            galleryTitle: "Публикации",
            galleryDescription: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
            galleryImage: img,
            galleryLink: "/",
            galleryLinkText: "Все публикации"
        },

        {
            galleryTitle: "Фотогалерея",
            galleryDescription: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
            galleryImage: img,
            galleryLink: "/",
            galleryLinkText: "Вся фотогалерея"
        },
        {
            galleryTitle: "Видеогалерея",
            galleryDescription: "Садыр Жапаров выпустил приказ по созданию общегосударственной архив...",
            galleryImage: img,
            galleryLink: "/",
            galleryLinkText: "Вся видеогалерея"
        },
    ];

    return <section className={s.gallery}>
        <div className="container">
            <div className={s.galleryInner}>
                {
                    galleryContent && galleryContent.map((item, index) => (
                        <GalleryBlock
                            key={index}
                            galleryTitle={item.galleryTitle}
                            galleryDescription={item.galleryDescription}
                            galleryImage={item.galleryImage}
                            galleryLink={item.galleryLink}
                            galleryLinkText={item.galleryLinkText}
                        />

                    ))
                }
            </div>
        </div>
    </section>;
};
