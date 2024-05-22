import classes from "./DetailPublication.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import img from "../../assets/images/japarov.webp";

export const DetailPublication = () => {

    const publicationContent = [
        {
            id: 1,
            title: " Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"
        },

        {
            id: 2,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"


        },
        {
            id: 3,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 4,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 5,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 6,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 7,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 8,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 9,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 10,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы.",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 11,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
        {
            id: 12,
            title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной службы",
            image: img,
            date: "12.09.2023",
            description: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности"

        },
    ];

    const {id} = useParams();
    const [publication, setPublication] = useState('');

    useEffect(() => {
        const pub = publicationContent.find(item => item.id === parseInt(id));
        setPublication(pub);
    }, [id]);
    return (
        <section className={classes.detailPublication}>
            <div className="container">
                <div className={classes.detailPublicationInner}>
                    <Typography variant="h1">Публикации</Typography>
                    <div className={classes.detailPublicationContent}>
                        <div className={classes.detailPublicationTitle}>
                            <Typography variant="h2">{publication.title}</Typography>
                        </div>
                        <div className={classes.detailPublicationContentInner}>
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