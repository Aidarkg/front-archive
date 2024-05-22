import {useParams} from "react-router-dom";
import classes from "./DetailPhoto.module.sass";
import img from "../../assets/images/japarov.webp";
import picture from "../../assets/images/pic.png";
import {Typography} from "../../Typography/Typography.jsx";
import {useEffect, useState} from "react";
import {CustomDate} from "../../ui/customDate/CustomDate.jsx";
import {ImageCount} from "../../ui/imageCount/ImageCount.jsx";

const imageContent = [
    {
        id:1,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:2,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:3,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:4,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:5,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:6,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:7,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:8,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
    {
        id:9,
        title: "Садыр Жапаров выпустил приказ по созданию общегосударственной архивной cлужбы",
        images: [img, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture, picture,  ],
        date: "12.09.2023",
        imageCount: 10
    },
];

export const DetailPhoto = () => {

    const {id} = useParams();
    const [photos, setPhotos] = useState('');

    useEffect(() => {
        const photo = imageContent.find(item => item.id === parseInt(id));
        setPhotos(photo);
    }, [id]);
    return (
        <section className={classes.detailPhoto}>
           <div className="container">
               <div className={classes.detailPhotoInner}>
                   <div className={classes.detailPhotoHead}>
                       <div className={classes.detailPhotoHeadInfo}>
                           <CustomDate date={photos.date} isWhite={true}/>
                           <ImageCount imageCount={photos.imageCount} isWhite={true}/>
                       </div>
                       <Typography variant="h2">{photos.title}</Typography>
                   </div>
                   <div className={classes.detailPhotoImages}>
                       {
                           photos?.images?.map((item, index)=>(
                               <div className={classes.imageWrapper} key={index}>
                                   <img src={item} alt="img"/>
                               </div>
                           ))
                       }
                   </div>
               </div>
           </div>
        </section>
    );
};
