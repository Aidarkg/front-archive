import classes from "./ResultsSections.module.sass";

import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

import { Typography } from "../../../UI/Typography/Typography";

import { PublicationBlock } from "../../../pages/main/publicationBlock/PublicationBlock";

import { CustomButton } from "../../../UI/customButton/CustomButton";
import { useSearchStore } from "../store/useSearchStore";

import { ArrowRight } from "../../../assets/icons/ArrowRight";

import { Loader } from "../../../components/loader/Loader";

import { RegulationsSection } from "../../npa/regulationsSection/RegulationsSection";


export const ResultsSections = () => {
    const { searchResults, nextResults, loadMoreResults, loadingMore } = useSearchStore();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const filteredResults = (type) => {
        return searchResults?.filter((result) => result.type === type);
    };

    const handleCardClick = (id) => {
        navigate(`/managementMore/${id}`);
    };

    return (
        <>
            {filteredResults("news").length > 0 && (
                <section className={classes.publications}>
                    <Typography
                        className={classes.headingManagement}
                        variant="h1" color="grey500"
                    >
                        {t("header&footer.subnav.publications")}
                    </Typography>
                    <PublicationBlock
                        contentArray={filteredResults("news")}
                        type="publications"
                        haveBtn={false}
                    />
                    {nextResults.news && (
                        <>
                            {loadingMore && <Loader />}
                            <CustomButton
                                text={t("loadMore")}
                                actionType="button"
                                icon={<ArrowRight />}
                                onClick={() => loadMoreResults("news")}
                                className={classes.btnMoreLoadResults}
                            />
                        </>
                    )}
                </section>
            )}
            {filteredResults("photos").length > 0 && (
                <section className={classes.photos}>
                    <Typography
                        className={classes.headingManagement}
                        variant="h1" color="grey500"
                    >
                        {t("header&footer.subnav.photo")}
                    </Typography>
                    <PublicationBlock
                        contentArray={filteredResults("photos")}
                        type="photo"
                        haveBtn={false}
                    />
                    {nextResults.photos && (
                        <>
                            {loadingMore && <Loader />}
                            <CustomButton
                                text={t("loadMore")}
                                actionType="button"
                                icon={<ArrowRight />}
                                onClick={() => loadMoreResults("photos")}
                                className={classes.btnMoreLoadResults}
                            />
                        </>
                    )}
                </section>
            )}
            {filteredResults("videos").length > 0 && (
                <section className={classes.videos}>
                    <Typography
                        className={classes.headingManagement}
                        variant="h1" color="grey500"
                    >
                        {t("header&footer.subnav.video")}
                    </Typography>
                    <PublicationBlock
                        contentArray={filteredResults("videos")}
                        type="video"
                        haveBtn={false}
                    />
                    {nextResults.videos && (
                        <>
                            {loadingMore && <Loader />}
                            <CustomButton
                                text={t("loadMore")}
                                actionType="button"
                                icon={<ArrowRight />}
                                onClick={() => loadMoreResults("videos")}
                                className={classes.btnMoreLoadResults}
                            />
                        </>
                    )}
                </section>
            )}
            {filteredResults("services").length > 0 && (
                <section className={classes.services}>
                    <Typography
                        className={classes.headingService}
                        variant="h1"
                        color="grey500"
                    >
                        {t("header&footer.nav.services")}
                    </Typography>
                    <div className={classes.serviceCardsContent}>
                        {filteredResults("services")?.map(({ id, title, status }) => (
                            <>
                                <div className={classes.serviceCards} key={id}>
                                    <Typography
                                        truncate={50}
                                        className={classes.textServiceCards}
                                        variant="h6"
                                        color="grey500"
                                    >
                                        {title}
                                    </Typography>
                                    <CustomButton
                                        className={classes.btnCardService}
                                        actionType="button"
                                        disabled
                                        text={status}
                                    />
                                </div>
                            </>
                        ))}
                    </div>
                    {nextResults.services && (
                        <>
                            {loadingMore && <Loader />}
                            <CustomButton
                                text={t("loadMore")}
                                actionType="button"
                                icon={<ArrowRight />}
                                onClick={() => loadMoreResults("services")}
                                className={classes.btnMoreLoadResults}
                            />
                        </>
                    )}
                </section>
            )}
            {filteredResults("managements").length > 0 && (
                <section className={classes.managements}>
                    <Typography
                        className={classes.headingManagement}
                        variant="h1" color="grey500"
                    >
                        {t("header&footer.subnav.management")}
                    </Typography>
                    <div className={classes.management}>
                        {filteredResults("managements")?.map(({ id, full_name, image, position, start_year, end_year }) => (
                            <div
                                className={classes.managementCard}
                                key={id}
                                onClick={() => handleCardClick(id)}
                            >
                                <div>
                                    <img src={image} alt={full_name} />
                                </div>
                                <div className={classes.managementCardContent}>
                                    <Typography variant="h6">{full_name}</Typography>
                                    <Typography variant="smallBody" color="grey500">{position}</Typography>
                                    <Typography variant="extraSmallBody" color="grey400">
                                        {`${t("managementPage.startActivityDate")} ${start_year} ${t("managementPage.currentActivityDate")} ${end_year}`}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                    {nextResults.managements && (
                        <>
                            {loadingMore && <Loader />}
                            <CustomButton
                                text={t("loadMore")}
                                actionType="button"
                                icon={<ArrowRight />}
                                onClick={() => loadMoreResults("managements")}
                                className={classes.btnMoreLoadResults}
                            />
                        </>
                    )}
                </section>
            )}
            {filteredResults("codexes").length > 0 && (
                <section className={classes.regulations}>
                    <Typography className={classes.headingRegulations} variant="h1" color="grey500" >
                        {t("regulationsPage.currentPage")}
                    </Typography>
                    <RegulationsSection
                        results={filteredResults("codexes")}
                        nextResults={nextResults.codexes}
                        loadMore={() => loadMoreResults("codexes")}
                        loading={loadingMore}
                        t={t}
                        buttonClass={classes.btnMoreLoadResults}
                    />
                </section>
            )}
        </>
    );
};


