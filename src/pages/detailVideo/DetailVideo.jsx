import {useParams} from "react-router-dom";
import classes from "./DetailVideo.module.sass";
export const DetailVideo = () => {
    const {id}=useParams();
    return (
        <section className={classes.detailVideo}>
            <h1>{id} video</h1>
        </section>
    );
};

