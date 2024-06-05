import classes from "./RegulationsDoc.module.sass";

import { useTranslation } from "react-i18next";

import { Typography } from "../Typography/Typography";

import { OpenDocRegulationsSvg } from "../Svg/OpenDocRegulationsSvg";
import { DownloadDocRegulationsSvg } from "../Svg/DownloadDocRegulationsSvg";

import { CustomButton } from "../customButton/CustomButton";
import { ResponsiveComponent } from "../../utils/responsiveComponent/ResponsiveComponent";

export const RegulationsDoc = ({ date, documentNumber, name, linkOpen, linkDownload }) => {
    const { t } = useTranslation();

    return (
        <li className={classes.tableRow}>
            <div className={classes.topRow}>
                <Typography className={classes.date} variant="body" color="black">
                    {date}
                </Typography>
                <Typography className={classes.numDoc} variant="body" color="black">
                    {documentNumber}
                </Typography>
            </div>
            <ResponsiveComponent type="truncatedRegulations" className={classes.name} name={name} />
            <div className={classes.btnsDoc}>
                {linkOpen && (
                    <CustomButton
                        text={t("regulationsPage.btnOpen")}
                        icon={<OpenDocRegulationsSvg />}
                        buttonStyle="withBorder"
                        className={classes.btn}
                        actionType="link"
                        to={linkOpen}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                )}
                {linkDownload && (
                    <CustomButton
                        text={t("regulationsPage.btnDownload")}
                        icon={<DownloadDocRegulationsSvg />}
                        buttonStyle="Grey"
                        className={classes.btn}
                        actionType="link"
                        to={linkDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                )}
            </div>
        </li>
    );
};





