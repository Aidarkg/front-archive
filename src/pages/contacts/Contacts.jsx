import classes from "./Contacts.module.sass";

import {Container} from "../../components/container/Container.jsx";
import {Breadcrumbs} from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import {Typography} from "../../UI/Typography/Typography.jsx";
import {useTranslation} from "react-i18next";
import {Loader} from "../../components/loader/Loader.jsx";

import useStoreContacts from "./store/store.js";
import {useEffect} from "react";

import {CapIconBlue} from "../../assets/icons/CapIconBlue.jsx";
import LocationIcon from "../../assets/icons/LocationIcon.jsx";
import PhoneStroke from "../../assets/icons/PhoneStroke.jsx";
import MailIcon from "../../assets/icons/MailIcon.jsx";
import CalendarIcon from "../../assets/icons/CalendarIcon.jsx";
import RestaurantIcon from "../../assets/icons/RestaurantIcon.jsx";
import {PeopleBlueIcon} from "../../assets/icons/PeopleBlueIcon.jsx";
import {BookIcon} from "../../assets/icons/BookIcon.jsx";
import {ContactsNumberIcon} from "../../assets/icons/ContactsNumberIcon.jsx";
import {CalendarTimeBlue} from "../../assets/icons/CalendarTimeBlue.jsx";
import {ErrorPage} from "../errorPage/ErrorPage.jsx";

export const Contacts = () => {

    const {t, i18n} = useTranslation();

    const { contacts, loading, error, fetchContacts } = useStoreContacts();

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts, i18n.language]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorPage/>;
    }
    return (
        <section>
            <Container>
                <Breadcrumbs currentPage={t("contactsPage.headings.mainHeading")} />
                <Typography className={classes.heading} variant="h1" color="blue500">
                    {t("contactsPage.headings.mainHeading")}
                </Typography>
                <div className={classes.contacts}>
                    <Typography variant="h2" color="black">
                        {t("header&footer.nav.archive")}
                    </Typography>
                    <div className={classes.archive}>
                        <div className={classes.archiveCard}>
                            <div className={classes.contactsContent}>
                                <Typography variant="h4" color="black" className={classes.archiveCardHeading}>
                                    <CapIconBlue/>
                                    {t("contactsPage.sections.generalInformation.generalInformation")}
                                </Typography>
                                <div className={classes.archiveCardLine}>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons} >
                                            <LocationIcon/>
                                            {t("contactsPage.sections.generalInformation.location")}
                                        </Typography>
                                        <Typography variant="body" color="grey500" className={classes.text}>
                                            {contacts?.archive?.[0]?.location}
                                        </Typography>
                                    </div>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons}>
                                            <PhoneStroke/>
                                            {t("contactsPage.sections.generalInformation.phoneNumber")}
                                        </Typography>
                                        <Typography className={classes.text}>
                                            <a href={`tel:${contacts?.archive[0]?.phone_number}`}>
                                                {contacts?.archive[0]?.phone_number}
                                            </a>
                                        </Typography>
                                    </div>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons}>
                                            <MailIcon/>
                                            {t("contactsPage.sections.generalInformation.email")}
                                        </Typography>
                                        <Typography className={classes.text}>
                                            {contacts?.archive[0]?.email && (
                                                <a href={`mailto:${contacts.archive[0].email}`}>
                                                    {contacts.archive[0].email}
                                                </a>
                                            )}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.contactsContent}>
                                <Typography variant="h4" color="black" className={classes.archiveCardHeading}>
                                    <CalendarTimeBlue/>
                                    {t("contactsPage.sections.schedule.schedule")}
                                </Typography>
                                <div className={classes.archiveCardLine}>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons} >
                                            <CalendarIcon/>
                                            {t("contactsPage.sections.duringWeekdays")}
                                        </Typography>
                                        <Typography variant="body" color="grey500" className={classes.text}>
                                            {contacts?.archive[0]?.reception?.[0]?.weekdays}
                                        </Typography>
                                    </div>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons}>
                                            <RestaurantIcon/>
                                            {t("contactsPage.sections.schedule.break")}
                                        </Typography>
                                        <Typography className={classes.text}>
                                            {contacts?.archive[0]?.schedule?.[0]?._break}
                                        </Typography>
                                    </div>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons}>
                                            <CalendarIcon/>
                                            {t("contactsPage.sections.schedule.saturdayAndSunday")}
                                        </Typography>
                                        <Typography className={classes.textColor}>
                                            {contacts?.archive[0]?.schedule?.[0]?.weekend}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.archiveCard}>
                            <div className={classes.contactsContent}>
                                <Typography variant="h4" color="black" className={classes.archiveCardHeading}>
                                    <PeopleBlueIcon/>
                                    {t("contactsPage.sections.receptionOfCitizens.receptionOfCitizens")}
                                </Typography>
                                <div className={classes.archiveCardLine}>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons} >
                                            <CalendarIcon/>
                                            {t("contactsPage.sections.duringWeekdays")}
                                        </Typography>
                                        <Typography variant="body" color="grey500" className={classes.text}>
                                            {contacts?.archive[0]?.reception?.[0]?.weekdays}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.contactsContent}>
                                <Typography variant="h4" color="black" className={classes.archiveCardHeading}>
                                    <BookIcon/>
                                    {t("contactsPage.sections.readingRoom.readingRoom")}
                                </Typography>
                                <div className={classes.archiveCardLine}>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons} >
                                            <CalendarIcon/>
                                            {t("contactsPage.sections.duringWeekdays")}
                                        </Typography>
                                        <Typography variant="body" color="grey500" className={classes.text}>
                                            {contacts?.archive[0]?.reading_room?.[0]?.weekdays}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.contacts}>
                    <Typography variant="h2" color="black">
                        {t("contactsPage.headings.midHeading")}
                    </Typography>
                    <div className={classes.archive}>
                        <div className={classes.archiveCard}>
                            <div className={classes.contactsContent}>
                                <Typography variant="h4" color="black" className={classes.archiveCardHeading}>
                                    <CapIconBlue/>
                                    {t("contactsPage.sections.generalInformation.generalInformation")}
                                </Typography>
                                <div className={classes.archiveCardLine}>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons} >
                                            <LocationIcon/>
                                            {t("contactsPage.sections.generalInformation.location")}
                                        </Typography>
                                        <Typography variant="body" color="grey500" className={classes.text}>
                                            {contacts?.anticor?.[0]?.location}
                                        </Typography>
                                    </div>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons}>
                                            <PhoneStroke/>
                                            {t("contactsPage.sections.generalInformation.phoneNumber")}
                                        </Typography>
                                        <Typography className={classes.text}>
                                            <a href={`tel:${contacts?.anticor?.[0]?.phone_number}`}>
                                                {contacts?.anticor?.[0]?.phone_number}
                                            </a>
                                        </Typography>
                                    </div>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons}>
                                            <MailIcon/>
                                            {t("contactsPage.sections.generalInformation.email")}
                                        </Typography>
                                        <Typography className={classes.text}>
                                            <a href={`mailto:${contacts?.anticor?.[0]?.email}`}>
                                                {contacts?.anticor?.[0]?.email}
                                            </a>
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.contacts}>
                    <Typography variant="h2" color="black">
                        {t("contactsPage.headings.bottomHeading")}
                    </Typography>
                    <div className={classes.archive}>
                        <div className={classes.archiveCard}>
                            <div className={classes.contactsContent}>
                                <Typography variant="h4" color="black" className={classes.archiveCardHeading}>
                                    <CapIconBlue/>
                                    {t("contactsPage.sections.generalInformation.generalInformation")}
                                </Typography>
                                <div className={classes.archiveCardLine}>
                                    <div className={classes.archiveCardContent}>
                                        <Typography variant="h6" color="black" className={classes.icons} >
                                            <ContactsNumberIcon/>
                                            {t("contactsPage.number")}
                                        </Typography>
                                        <Typography variant="body" color="grey500" className={classes.text}>
                                            <a href={`tel:${contacts?.coll_center?.[0]?.number}`}>
                                                {contacts?.coll_center?.[0]?.number}
                                            </a>
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
