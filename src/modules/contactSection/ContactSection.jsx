import styles from "../contactSection/ContactSection.module.sass";
import {LocationIcon} from "../../assets/icons/LocationIcon";
import PhoneIcon from "../../assets/icons/PhoneStroke";
import IndexIcon from "../../assets/icons/ImageIcon";
import FaxIcon from "../../assets/icons/FolderIcon";
import EmailIcon from "../../assets/icons/MailIcon";
import FacebookIcon from "../../assets/icons/Facebook";
import YandexMap from "./yandexMap/YandexMap.jsx";
import {useEffect} from "react";
import {Loader} from "../../components/loader/Loader.jsx";
import {ErrorPage} from "../../pages/errorPage/ErrorPage.jsx";
import { useContactsStoreMain} from "./store/store.js";
import {useTranslation} from "react-i18next";
import {Container} from "../../components/container/Container.jsx";

const ContactBlock = ({ label, value, icon, isLink }) => (
    <div className={styles.contactBlock}>
       <div className={styles.icon}>{icon}</div>
       <div>
          <p className={styles.label}>{label}</p>
          {isLink ? (
              <a href={isLink} className={styles.value}>{value}</a>
          ) : (
              <p className={styles.value}>{value}</p>
          )}
       </div>
    </div>
);

const ContactSection = () => {
   const { data, loading, error, fetchContacts } = useContactsStoreMain();
   const { t, i18n } = useTranslation();

   useEffect(() => {
      fetchContacts();
   }, [fetchContacts, i18n.language]);

   if (loading) {
      return <Loader />;
   }
   if (error) {
      return <ErrorPage />;
   }

   const { contacts } = data || {};

   return (
       <Container>
          <div className={styles.contactSection}>
             <h2>Контакты</h2>
             <div className={styles.contactSectionBlock}>
                <div className={styles.contactSectionInner}>
                   <h2>Кыргызская Республика, г. Бишкек</h2>
                   <div className={styles.contactSectionKontak}>
                      <div className={styles.contactSectionBlockGap1}>
                         <ContactBlock
                             label={t("contactsPage.sections.generalInformation.location")}
                             value={contacts?.address}
                             icon={<LocationIcon height="24" width="24" color="var(--blue400)" />}
                         />
                         <ContactBlock
                             label="Телефон"
                             value={contacts?.phone_number}
                             icon={<PhoneIcon height="24" width="24" color="var(--blue400)" />}
                             isLink={`tel:${contacts?.phone_number}`}
                         />
                         <ContactBlock
                             label="Индекс"
                             value={contacts?.index}
                             icon={<IndexIcon height="24" width="24" color="var(--blue400)" />}
                         />
                      </div>
                      <div className={styles.contactSectionBlockGap2}>
                         <ContactBlock
                             label="Факс"
                             value={contacts?.fax}
                             icon={<FaxIcon height="24" width="24" color="var(--blue400)" />}
                         />
                         <ContactBlock
                             label="Электронная почта"
                             value={contacts?.email}
                             icon={<EmailIcon height="24" width="24" color="var(--blue400)" />}
                             isLink={`mailto:${contacts?.email}`}
                         />
                         <ContactBlock
                             label="Facebook"
                             value={contacts?.facebook}
                             icon={<FacebookIcon height="24" width="24" color="var(--blue400)" />}
                             isLink={contacts?.facebook}
                         />
                      </div>
                   </div>
                </div>
                <YandexMap />
             </div>
          </div>
       </Container>
   );
};

export default ContactSection;
