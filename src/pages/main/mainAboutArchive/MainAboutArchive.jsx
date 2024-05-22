import { ContentBlocks } from "../../aboutArchive/contentBlocks/ContentBlocks";
import img from "../../../assets/images/about-pic.png";
import classes from "./MainAboutArchive.module.sass";
import { Btn } from "./btn/Btn";

const blocks = [
   {
      heading: "Положение об архиве Министерства юстиции Кыргызской Республики",
      text: "Архив Кыргызстана - это организация, ответственная за сбор, сохранение и предоставление доступа к историческим документам и архивным материалам, относящимся к истории и культуре Кыргызстана. Он играет важную роль в сохранении национального наследия и предоставлении доступа к историческим ресурсам для исследований, образования и общественности",
      image: img,      
   },
   {
      image: img,
      heading: "В провинции никого не пугает детский заливистый смех!",
      text: "Следует отметить, что сложившаяся структура организации предполагает независимые способы реализации существующих финансовых и административных условий! В своём стремлении улучшить пользовательский опыт мы упускаем, что сторонники тоталитаризма в науке, инициированные исключительно синтетически, своевременно верифицированы. Мы вынуждены отталкиваться от того, что высокотехнологичная концепция общественного уклада обеспечивает актуальность модели развития.",
   },
   {
      heading:
         "Постоянный количественный рост не стал ограничивающим фактором ",
      text: "Учитывая ключевые сценарии поведения, современная методология разработки говорит о возможностях соответствующих условий активизации. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта объективно рассмотрены соответствующими инстанциями! Для современного мира сплочённость команды профессионалов представляет собой интересный эксперимент проверки распределения внутренних резервов и ресурсов.",
      image: img,
   },
];


export const MainAboutArchive = () => {
   return (
      <section>
         <div className={classes.container}>
            <div className={classes.contBtn}>
               <ContentBlocks showTitle={false} blocks={blocks.slice(0, 1)} />
               <Btn/>
            </div>
         </div>
      </section>
   );
};
