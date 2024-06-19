import styles from "../contactSection/ContactSection.module.sass";
import AddressIcon from "../../assets/icons/LocationIcon";
import PhoneIcon from "../../assets/icons/PhoneStroke";
import IndexIcon from "../../assets/icons/ImageIcon";
import FaxIcon from "../../assets/icons/FolderIcon";
import EmailIcon from "../../assets/icons/MailIcon";
import FacebookIcon from "../../assets/icons/Facebook";
import YandexMap from "./yandexMap/YandexMap.jsx";

const ContactBlock = ({ label, value, icon }) => (
   <div className={styles.contactBlock}>
      <div className={styles.icon}>{icon}</div>
      <div>
         <p className={styles.label}>{label}</p>
         <p className={styles.value}>{value}</p>
      </div>
   </div>
);
//FIX ME Вынести в отдельный компонент добавить перевод
const ContactSection = () => (
   <div className="container">
      <div className={styles.contactSection}>
         <h2>Контакты</h2>
         <div className={styles.contactSectionBlock}>
            <div className={styles.contactSectionInner}>
               <h2>Кыргызская Республика, г. Бишкек</h2>
               <div className={styles.contactSectionKontak}>
                  <div className={styles.contactSectionBlockGap1}>
                     <ContactBlock
                        label="Адрес"
                        value="ул.Фрунзе, 477"
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
   </div>
);

export default ContactSection;
