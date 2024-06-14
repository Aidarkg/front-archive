import { useRef } from 'react';
import classes from "./CustomCard.module.sass";
import { CustomDate } from "../customDate/CustomDate.jsx";
import { ImageCount } from "../imageCount/ImageCount.jsx";
import ReactPlayer from "react-player";
import {Typography} from "../Typography/Typography.jsx";

export const CustomCard = ({ onClick, image, video, date, title, imageCount, isLargeCard }) => {
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className={`${classes.customCard} ${isLargeCard ? classes.largeCard : ""}`} onClick={onClick}>
            <div className={`${isLargeCard ? classes.largeImage : classes.customCardImage}`}>
                {image && <img src={image} alt="publication" />}
                {video? video.includes("youtube.com") || video.includes("youtu.be") ? (
                    <ReactPlayer url={video} controls={true}  />
                ) : (
                    <video src={video} controls ref={videoRef} onClick={handleVideoClick}/>
                ): ""}
            </div>
            <div className={classes.customCardInfo}>
                <div className={classes.customCardExtraInfo}>
                    {date && <CustomDate date={date} />}
                    {imageCount>0&& <ImageCount imageCount={imageCount} />}
                </div>
                <Typography variant="smallBody" truncate={68}>{title}</Typography>
            </div>
        </div>
    );
};