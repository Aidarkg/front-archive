import classes from "./ResultsSections.module.sass";

import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

import { Typography } from "../../../Typography/Typography";

import { PublicationBlock } from "../../../pages/main/publicationBlock/PublicationBlock";

import { CustomButton } from "../../../UI/customButton/CustomButton";
import { RegulationsDoc } from "../../../UI/regulationsDoc/RegulationsDoc";
import { useSearchStore } from "../store/useSearchStore";

import { ArrowRight } from "../../../assets/icons/ArrowRight";

export const ResultsSections = () => {
    const { searchResults, nextResults, loadMoreResults } = useSearchStore();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const newsResults = searchResults?.filter((result) => result.type === "news");
    const photosResults = searchResults?.filter((result) => result.type === "photos");
    const videosResults = searchResults?.filter((result) => result.type === "videos");
    const servicesResults = searchResults?.filter((result) => result.type === "services");
    const managementsResults = searchResults?.filter((result) => result.type === "managements");
    const codexesResults = searchResults?.filter((result) => result.type === "codexes");

    const handleCardClick = (id) => {
        navigate(`/managementMore/${id}`);
    };

    return (
        <>
            {newsResults.length > 0 && (
                <section className={classes.publications}>
                    <Typography
                        className={classes.headingManagement}
                        variant="h1" color="grey500"
                    >
                        {t("header&footer.subnav.publications")}
                    </Typography>
                    <PublicationBlock
                        contentArray={newsResults}
                        type="publications"
                        haveBtn={false}
                    />
                    {nextResults.news && (
                        <CustomButton
                            text={"Ещё"}
                            actionType="button"
                            icon={<ArrowRight />}
                            onClick={() => loadMoreResults("news")}
                            className={classes.btnMoreLoadResults}
                        />
                    )}
                </section>
            )}
            {photosResults.length > 0 && (
                <section className={classes.photos}>
                    <Typography
                        className={classes.headingManagement}
                        variant="h1" color="grey500"
                    >
                        {t("header&footer.subnav.photo")}
                    </Typography>
                    <PublicationBlock
                        contentArray={photosResults}
                        type="photo"
                        haveBtn={false}
                    />
                    {nextResults.photos && (
                        <CustomButton
                            text={"Ещё"}
                            actionType="button"
                            icon={<ArrowRight />}
                            onClick={() => loadMoreResults("photos")}
                            className={classes.btnMoreLoadResults}
                        />
                    )}
                </section>
            )}
            {videosResults.length > 0 && (
                <section className={classes.videos}>
                    <Typography
                        className={classes.headingManagement}
                        variant="h1" color="grey500"
                    >
                        {t("header&footer.subnav.video")}
                    </Typography>
                    <PublicationBlock
                        contentArray={videosResults}
                        type="video"
                        haveBtn={false}
                    />
                    {nextResults.videos && (
                        <CustomButton
                            text={"Ещё"}
                            actionType="button"
                            icon={<ArrowRight />}
                            onClick={() => loadMoreResults("videos")}
                            className={classes.btnMoreLoadResults}
                        />
                    )}
                </section>
            )}
            {servicesResults.length > 0 && (
                <section className={classes.services}>
                    <Typography
                        className={classes.headingService}
                        variant="h1"
                        color="grey500"
                    >
                        {t("header&footer.nav.services")}
                    </Typography>
                    <div className={classes.serviceCardsContent}>
                        {servicesResults?.map(({ id, title, status }) => (
                            <>
                                <div className={classes.serviceCards} key={id}>
                                    <Typography
                                        className={classes.textServiceCards}
                                        variant="h6"
                                        color="grey500"
                                    >
                                        {title}
                                    </Typography>
                                    <CustomButton
                                        className={classes.btnCardService}
                                        text={status}
                                    />
                                </div>
                            </>
                        ))}
                        {nextResults.services && (
                            <CustomButton
                                text={"Ещё"}
                                actionType="button"
                                icon={<ArrowRight />}
                                onClick={() => loadMoreResults("services")}
                                className={classes.btnMoreLoadResults}
                            />
                        )}
                    </div>
                </section>
            )}
            {managementsResults.length > 0 && (
                <section className={classes.managements}>
                    <Typography
                        className={classes.headingManagement}
                        variant="h1" color="grey500"
                    >
                        {t("header&footer.subnav.management")}
                    </Typography>
                    <div className={classes.management}>
                        {managementsResults?.map(({ id, full_name, image, position, start_year, end_year }) => (
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
                                        {`с ${start_year} по ${end_year}`}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                        {nextResults.managements && (
                            <CustomButton
                                text={"Ещё"}
                                actionType="button"
                                icon={<ArrowRight />}
                                onClick={() => loadMoreResults("managements")}
                                className={classes.btnMoreLoadResults}
                            />
                        )}
                    </div>
                </section>
            )}
            {codexesResults.length > 0 && (
                <section className={classes.regulations}>
                    <Typography className={classes.headingRegulations} variant="h1" color="grey500" >
                        {t("regulationsPage.currentPage")}
                    </Typography>
                    <div className={classes.table}>
                        <ul className={classes.headings}>
                            <li className={classes.headingDate} >
                                <Typography variant="h6" color="grey500">
                                    {t("regulationsPage.tableHeadings.date")}
                                </Typography>
                            </li>
                            <li className={classes.headingNumberDoc}>
                                <Typography variant="h6" color="grey500">
                                    {t("regulationsPage.tableHeadings.documentNumber")}
                                </Typography>
                            </li>
                            <li className={classes.headingName}>
                                <Typography variant="h6" color="grey500">
                                    {t("regulationsPage.tableHeadings.name")}
                                </Typography>
                            </li>
                        </ul>
                        <ul className={classes.documentsContainer}>
                            {codexesResults?.map(({ id, title, pdf_file, document_number }) => (
                                <RegulationsDoc
                                    key={id}
                                    // date={doc.date_file} FIX_ME неверный формат символов 26-04-2024
                                    date={"26.04.2024"}
                                    documentNumber={document_number}
                                    name={title}
                                    linkOpen={pdf_file}
                                    linkDownload={pdf_file}
                                />
                            ))}
                        </ul>
                        {nextResults.codexes && (
                            <CustomButton
                                text={"Ещё"}
                                actionType="button"
                                icon={<ArrowRight />}
                                onClick={() => loadMoreResults("codexes")}
                                className={classes.btnMoreLoadResults}
                            />
                        )}
                    </div>
                </section>
            )}
        </>
    );
};


