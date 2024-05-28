import { useTranslation } from "react-i18next";
import { Typography } from "../../../Typography/Typography";
import { Container } from "../../../components/container/Container";
import { Btn } from "../../main/mainAboutArchive/btn/Btn";
import classes from "./ContentBlocks.module.sass";


export const ContentBlocks = ({ blocks, showTitle = true, showButton = false }) => {   
   const { t } = useTranslation();

   return (
      <section className={classes.main}>
         <Container>
            {showTitle && (
               <Typography  variant="h1" color="blue500">
                  {t("header&footer.subnav.aboutArchive")}
               </Typography>
            )}
            <div >
               <div>
                   {blocks.map((block, index) => (
                       <div
                           key={index}
                           className={`${classes.contentBlock} ${
                               index % 2 !== 0 ? classes.left : " "
                           }`}
                       >
                           <div className={classes.contentBlockText}>
                               <Typography className={classes.heading} variant="h2">
                                   {block.heading}
                               </Typography>
                               <Typography className={classes.text} variant="p">
                                   {block.text}
                               </Typography>
                               {showButton && index === 0 && (
                                   <div className={classes.buttonContainer}>
                                       <Btn />
                                   </div>
                               )}
                           </div>
                           <div className={index % 2 !== 0 ? "left" : "right"}>
                               <img
                                   className={
                                       index % 2 !== 0
                                           ? classes.leftImage
                                           : classes.image
                                   }
                                   src={block.image}
                                   alt="Image"
                               />
                           </div>
                       </div>
                   ))}
               </div>
            </div>
         </Container>
      </section>
   );
};
