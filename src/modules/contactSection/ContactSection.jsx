import styles from "../contactSection/ContactSection.module.sass";
import AddressIcon from "../../assets/icons/LocationIcon";
import PhoneIcon from "../../assets/icons/PhoneStroke";
import IndexIcon from "../../assets/icons/ImageIcon";
import FaxIcon from "../../assets/icons/FolderIcon";
import EmailIcon from "../../assets/icons/MailIcon";
import FacebookIcon from "../../assets/icons/Facebook";
import YandexMap from "./yandexMap/YandexMap.jsx";
import {useEffect} from "react";
import {Loader} from "../../components/loader/Loader.jsx";
import {ErrorPage} from "../../pages/errorPage/ErrorPage.jsx";
import {getContactsMain} from "./store/store.js";
import {useTranslation} from "react-i18next";
import {Container} from "../../components/container/Container.jsx";

const ContactBlock = ({ label, value, icon }) => (
   <div className={styles.contactBlock}>
      <div className={styles.icon}>{icon}</div>
      <div>
         <p className={styles.label}>{label}</p>
         <p className={styles.value}>{value}</p>
      </div>
   </div>
);

const ContactSection = () => {

   const { contacts, loading, error, getData } = getContactsMain();
   const {t, i18n} = useTranslation();
   console.error(contacts.logo.contacts, "aaa");
   useEffect(() => {
      getData();
   }, [getData, i18n.language]);
   if (loading) {
      return <Loader />;
   }
   if (error) {
      return <ErrorPage/>;
   }
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
                                // value={contacts?.results?.address}
                                icon={<AddressIcon />}
                            />
                            <ContactBlock
                                label="Телефон"
                                value="+996 505 39 28 63"
                                icon={<PhoneIcon />}
                            />
                            <ContactBlock
                                label="Индекс"
                                value="720040"
                                icon={<IndexIcon />}
                            />
                         </div>
                         <div className={styles.contactSectionBlockGap2}>
                            <ContactBlock
                                label="Факс"
                                value="480263"
                                icon={<FaxIcon />}
                            />
                            <ContactBlock
                                label="Электронная почта"
                                value="archive.gov@gmail.com"
                                icon={<EmailIcon />}
                            />
                            <ContactBlock
                                label="Facebook"
                                value="Архивная служба"
                                icon={<FacebookIcon />}
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
