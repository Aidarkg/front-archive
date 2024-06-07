import styles from "./Contacts.module.sass";
import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs.jsx";
import CapIcon from "../../assets/icons/CapIcon";
import PhoneStroke from "../../assets/icons/PhoneStroke";
import LocationIcon from "../../assets/icons/LocationIcon";
import MailIcon from "../../assets/icons/MailIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import TeamIcon from "../../assets/icons/TeamIcon";
import CalendarTime from "../../assets/icons/CalendarTime";
import RestaurantIcon from "../../assets/icons/RestaurantIcon";
import BookIcon from "../../assets/icons/BookIcon";
import {Container} from "../../components/container/Container.jsx";

const ContactCard = ({ title,
                       items }) => (
  <div className={styles.card}>
    <h3 className={styles.card_title}>
      {title === "Общая информация" && <CapIcon className={styles.icon} />}
      {title === "График работы" && <CalendarTime className={styles.icon} />}
      {title === "Прием граждан" && <TeamIcon className={styles.icon} />}
      {title === "Читальный зал" && <BookIcon className={styles.icon} />}
      {title}
    </h3>
    <div className={styles.card_contact_wrapper}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <p className={styles.label}>
            {item.label === "Местоположение" && <LocationIcon className={styles.icon} />}
            {item.label === "Номер телефона" && <PhoneStroke className={styles.icon} />}
            {item.label === "Электронная почта" && <MailIcon className={styles.icon} />}
            {item.label === "В будние дни" && <CalendarIcon className={styles.icon} />}
            {item.label === "Суббота и воскресенье" && <CalendarIcon className={styles.icon} />}
            {item.label === "Перерыв" && <RestaurantIcon className={styles.icon} />}
            {item.label === "Номер" && <PhoneStroke className={styles.icon} />}
            {item.label}
          </p>
          <p className={item.value === "Выходной" ? styles.value_weekend : styles.value}>{item.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const ContactSection = ({ title, cards }) => (
  <div className={styles.section}>
    <h2>{title}</h2>
    <div className={styles.cardsContainer}>
      {cards.map((card, index) => (
        <ContactCard key={index} title={card.title} items={card.items} />
      ))}
    </div>
  </div>
);

export const Contacts = () => {
  const archiveCards = [
    {
      title: "Общая информация",
      items: [
        { label: "Местоположение", value: "Кыргызская Республика, г. Бишкек, ул. Фрунзе, 477." },
        { label: "Номер телефона", value: "0312 15 74 85" },
        { label: "Электронная почта", value: "archivepresident@president.kg" },
      ],
    },
    {
      title: "График работы",
      items: [
        { label: "В будние дни", value: "с 8:30 до 17:30" },
        { label: "Перерыв", value: "12:00-13:00" },
        { label: "Суббота и воскресенье", value: "Выходной" },
      ],
    },
    {
      title: "Прием граждан",
      items: [
        { label: "В будние дни", value: "с 9:00 до 17:00" },
      ],
    },
    {
      title: "Читальный зал",
      items: [
        { label: "В будние дни", value: "с 9:30 до 16:30" },
      ],
    },
  ];

  const anticorruptionCards = [
    {
      title: "Общая информация",
      items: [
        { label: "Местоположение", value: "Кыргызская Республика, г. Бишкек, ул. Фрунзе, 477." },
        { label: "Номер телефона", value: "0312 15 74 85" },
        { label: "Электронная почта", value: "archivepresident@president.kg" },
      ],
    },
  ];

  const callCenterCards = [
    {
      title: "Общая информация",
      items: [
        { label: "Номер", value: "0312 15 74 85" },
      ],
    },
  ];

  return (
    <Container>
      <Breadcrumbs currentPage={"Контакты"} />
      <div className={styles.contactsPage}>
        <h1>Контактная информация</h1>
        <ContactSection title="Архив" cards={archiveCards} />
        <div className={styles.breadcrumbsContainer}>
          <ContactSection title="Антикоррупционные дела" cards={anticorruptionCards} />
          <ContactSection title="Колл-центр" cards={callCenterCards} />
        </div>
      </div>
    </Container>
  );
};