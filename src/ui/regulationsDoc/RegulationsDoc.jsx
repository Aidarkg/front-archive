import classes from "./RegulationsDoc.module.sass";

import { useTranslation } from "react-i18next";

import { Typography } from "../../Typography/Typography";

import { OpenDocRegulationsSvg } from "../Svg/OpenDocRegulationsSvg";
import { DownloadDocRegulationsSvg } from "../Svg/DownloadDocRegulationsSvg";

import { CustomButton } from "../customButton/CustomButton";

export const RegulationsDoc = ({ date, documentNumber, name }) => {
    const { t } = useTranslation();

    return (
        <li className={classes.tableRow}>
            <Typography className={classes.date} variant="body" color="black">
                {date}
            </Typography>
            <Typography className={classes.numDoc} variant="body" color="black">
                {documentNumber}
            </Typography>
            <Typography className={classes.name} variant="body" color="black">
                {name}
            </Typography>
            <div className={classes.btnsDoc}>
                <CustomButton
                    text={t("regulationsPage.btnOpen")}
                    icon={<OpenDocRegulationsSvg />}
                    buttonStyle="withBorder"
                />
                <CustomButton
                    text={t("regulationsPage.btnDownload")}
                    icon={< DownloadDocRegulationsSvg />}
                    buttonStyle="Grey"
                />
            </div>
        </li>
    );
};





