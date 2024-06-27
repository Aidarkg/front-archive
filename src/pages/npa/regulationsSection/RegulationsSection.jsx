import classes from "./RegulationsSection.module.sass";

import { Loader } from "../../../components/loader/Loader";

import { Typography } from "../../../UI/Typography/Typography";
import { RegulationsDoc } from "../../../UI/regulationsDoc/RegulationsDoc";
import { CustomButton } from "../../../UI/customButton/CustomButton";

import { ErrorPage } from "../../errorPage/ErrorPage";

import { ArrowRight } from "../../../assets/icons/ArrowRight";


export const RegulationsSection = ({
    results,
    nextResults,
    loadMore,
    loading,
    error,
    t,
    buttonClass
}) => {
    return (
        <>
            <ul className={classes.headingsOutside}>
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
                    {loading && <Loader /> || error && <ErrorPage />}
                    {results?.map(({ id, title, pdf_file, date_file, document_number }) => (
                        <RegulationsDoc
                            key={id}
                            date={date_file}
                            documentNumber={document_number}
                            name={title}
                            linkOpen={pdf_file}
                            linkDownload={pdf_file}
                        />
                    ))}
                </ul>
            </div>
            {nextResults && (
                <>
                    {loading && <Loader />}
                    <CustomButton
                        text={t("loadMore")}
                        icon={<ArrowRight />}
                        className={buttonClass}
                        onClick={loadMore}
                    />
                </>
            )}
        </>
    );
};


