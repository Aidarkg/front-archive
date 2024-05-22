import { Typography } from "../../../Typography/Typography";
import { Btn } from "../../main/mainAboutArchive/btn/Btn";
import classes from "./ContentBlocks.module.sass";

export const ContentBlocks = ({ blocks, showTitle = true, showButton = false }) => {
   return (
      <section className={classes.main}>
         {showTitle && (
            <Typography className={classes.h1} variant="h1" color="blue500">
                Об архиве
            </Typography>
         )}
         <div className={classes.container}>
            <div className={classes.contentInner}>
               {blocks.map((block, index) => (
                  <div
                     key={index}
                     className={`${classes.contentBlock} ${index % 2 !== 0 ? classes.left : " "}`}
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
      </section>
   );
};
