import classes from "./RegulationsDoc.module.sass";

import { useTranslation } from "react-i18next";

import { Typography } from "../Typography/Typography";

import { OpenDocRegulationsSvg } from "../svgComponents/OpenDocRegulationsSvg";
import { DownloadDocRegulationsSvg } from "../svgComponents/DownloadDocRegulationsSvg";

import { CustomButton } from "../customButton/CustomButton";

import { ResponsiveComponent } from "../../utils/responsiveComponent/ResponsiveComponent";

import { useRegulationsStore } from "../../pages/npa/store/useRegulationsStore";

export const RegulationsDoc = ({ date, documentNumber, name, linkOpen, linkDownload }) => {
    const { t } = useTranslation();
    const { downloadFile } = useRegulationsStore();

    const handleDownload = () => {
        downloadFile(linkDownload, `${name}.pdf`);
    };

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
                        actionType="button"
                        onClick={handleDownload}
                        // FIX_ME 
                    />
                )}
            </div>
        </li>
    );
};





