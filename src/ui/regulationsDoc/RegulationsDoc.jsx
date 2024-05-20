import styles from "./RegulationsDoc.module.sass";

import { useTranslation } from "react-i18next";

import { Typography } from "../../Typography/Typography";

import { OpenDocRegulationsSvg } from "../Svg/OpenDocRegulationsSvg";
import { DownloadDocRegulationsSvg } from "../Svg/DownloadDocRegulationsSvg";

import { CustomButton } from "../customButton/CustomButton";

export const RegulationsDoc = ({ date, documentNumber, name }) => {
    const { t } = useTranslation();

    return (
        <li className={styles.tableRow}>
            <Typography className={styles.date} variant="body" color="black">
                {date}
            </Typography>
            <Typography className={styles.numDoc} variant="body" color="black">
                {documentNumber}
            </Typography>
            <Typography className={styles.name} variant="body" color="black">
                {name}
            </Typography>
            <div className={styles.btnsDoc}>
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





