import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loader/Loader.jsx";
import {useDataMore} from "./store/store.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Typography} from "../../Typography/Typography.jsx";
import classes from "./ManagementMore.module.sass";
import {CalendarBlue} from "../../assets/icons/CalendarBlue.jsx";
import {CapIconBlue} from "../../assets/icons/CapIconBlue.jsx";
import {CalendarIcon} from "../../assets/icons/CalendarIcon.jsx";
import LocationIcon from "../../assets/icons/LocationIcon.jsx";
import {CaseIcon} from "../../assets/icons/CaseIcon.jsx";
import {ChinIconBlue} from "../../assets/icons/ChinIconBlue.jsx";
import {FolderIconBlue} from "../../assets/icons/FolderIconBlue.jsx";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";

export const ManagementMore = () => {
    const { id } = useParams();
    const { data, loading, error, getData } = useDataMore();

    useEffect(() => {
        getData(id);
    }, [id, getData]);
    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return(
        <Container>
            <Breadcrumbs currentPage={"руководство"} parentPageLink="/management" currentPageId={data.position} />
            {data && (
                <div className={classes.managementMore}>
                   <div>
                       <img src={data.image} alt="photo" />
                   </div>
                    <div className={classes.managementMoreContent}>
                        <div className={classes.managementMoreContentProfile}>
                            <Typography variant="h3" color="black">{data.full_name}</Typography>
                            <Typography variant="h4" color="grey500">{data.position}</Typography>
                        </div>


                        <div className={classes.managementMoreContentProfile}>
                            <Typography  variant="h4" className={classes.managementIconBlue}>
                                <CalendarBlue/>
                                Дата рождения
                            </Typography>
                            <Typography variant="h5">{data.birth_date}</Typography>
                        </div>


                        <div className={classes.managementMoreContentProfile}>
                            <Typography  variant="h4" className={classes.managementIconBlue}>
                                <CapIconBlue/>
                                Образование
                            </Typography>
                            {data?.managements_education?.map((education, index) => (
                                <div className={classes.border} key={index}>
                                    <Typography color="black" className={classes.managementIconBlack} variant="body">
                                        <CalendarIcon/>
                                        {education.year}
                                    </Typography>
                                    <Typography className={classes.managementIconBlack} variant="body" color="black">
                                        <LocationIcon/>
                                        {education.place}
                                    </Typography>
                                    <Typography color="black" className={classes.managementIconBlack} variant="body">
                                        <CaseIcon/>
                                        {education.specialization}
                                    </Typography>
                                </div>
                            ))}
                        </div>


                        <div className={classes.managementMoreContentProfile}>
                            <Typography  className={classes.managementIconBlue} variant="h4" color="black">
                                <ChinIconBlue/>
                                Классный чин
                            </Typography>
                            <Typography className={classes.managementIconBlue} variant="body" color="grey500" >
                                {data.clas_chin}
                            </Typography>
                        </div>


                        <div className={classes.managementMoreContentProfile}>
                            <Typography className={classes.managementIconBlue} variant="h4">
                                <FolderIconBlue/>
                                Опыт работы
                            </Typography>
                            {data?.managements_work?.map((work, index) => (
                                <div className={classes.border} key={index}>
                                    <Typography className={classes.managementIconBlack} variant="body" color="black">
                                        <CalendarIcon/>
                                        {`${work.start_year}-${work.end_year} гг`}
                                    </Typography>
                                    <Typography className={classes.managementIconBlack} variant="body" color="black">
                                        <LocationIcon/>
                                        {work.place}
                                    </Typography>
                                    <Typography className={classes.managementIconBlack} variant="body" color="black">
                                        <CaseIcon/>
                                        {work.position}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};