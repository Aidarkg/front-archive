import s from "./DetailPublication.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import img from "../../assets/images/japarov.webp";

export const DetailPublication = () => {

    const publicationContent = [
        {
            id: 1,
            title: " йцукенгшщСадыр Жапаров выпустил приказ по созданию общегосударственной архивной уцыквеанпгшр",
            image: img,
            date: "12.09.2023",
            description: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"
        },

        {
            id: 2,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивйцукенгйцукенгшш",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "              2      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 3,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "              3      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 4,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "              4      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 5,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 6,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 7,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 8,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 9,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 10,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы.",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 11,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
        {
            id: 12,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa delectus facilis, minima nesciunt officia perferendis rem saepe? Animi aperiam, doloribus eligendi excepturi fugit labore laboriosam modi possimus qui quod quos repellat tempore. Assumenda ducimus illo iure maiores numquam officiis qui tempora tempore voluptas voluptates. Cupiditate explicabo tenetur vel. Accusamus beatae commodi corporis cum ducimus, eius eos exercitationem iusto laborum nam, omnis perferendis provident, quibusdam recusandae rerum soluta vero? Blanditiis consectetur culpa deleniti, distinctio dolor ea esse fuga illo in mollitia natus, non omnis vel. Architecto, delectus, esse facilis illum ipsa modi mollitia nam odit officia quidem quo ratione, veritatis!"

        },
    ];

    const {id} = useParams();
    const [publication, setPublication] = useState('');

    useEffect(() => {
        const pub = publicationContent.find(item => item.id === parseInt(id));
        setPublication(pub);
    }, [id]);
    return (
        <section className={s.detailPublication}>
            <div className="container">
                <div className={s.detailPublicationInner}>
                    <Typography variant="h1">Публикации</Typography>
                    <div className={s.detailPublicationContent}>
                        <Typography variant="h2">{publication.title}</Typography>
                        <div className={s.detailPublicationContentInner}>
                            <Typography>{publication.description}</Typography>
                            <div>
                                <img src={publication.image} alt={publication.title}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
