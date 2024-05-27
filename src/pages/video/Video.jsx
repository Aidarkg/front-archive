import classes from "./Video.module.sass";
import {Typography} from "../../Typography/Typography.jsx";
import {CustomCard} from "../../UI/customCard/CustomCard.jsx";
import {useVideo} from "./api/VideoStore.js";
import {useEffect} from "react";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";


export const Video = () => {

    const {videoContent, getVideoContent} = useVideo(state => ({
        videoContent: state.videoContent,
        getVideoContent: state.getVideoContent
    }));

    useEffect(() => {
        getVideoContent();
    }, []);
    return (
        <section className={classes.video}>
            <div className="container">
                <Breadcrumbs currentPage={"Видео"}/>
                <div className={classes.videoInner}>
                    <Typography variant="h1">Видео</Typography>
                    <div className={classes.videoContent}>
                        {videoContent && videoContent.map((item) => (
                            <CustomCard
                                key={item.id}
                                image={item.video}
                                date={item.public_date}
                                title={item.title}
                                //FIX ME  onClick={() => navigate(`/video/${item.id}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};