import { Typography } from "../../../Typography/Typography";
import css from "./ContentBlocks.module.sass";

export const ContentBlocks = ({ blocks }) => {
   return (
      <section className={css.main}>         
         <Typography className={css.h1} variant="h1" color="blue500">
            Об архиве
         </Typography>
         <div className={css.contentContainer}>
            {blocks.map((block, index) => (
               <div key={index} className={css.contentBlock}>
                  {(index === 0 || index % 3 === 0) && (
                     <>
                        <div className={css.left}>
                           <h2 className={css.heading}>{block.heading}</h2>
                           <p className={css.text}>{block.text}</p>
                           {/* <Typography className={css.text} variant="p">
                               {block.text}
                           </Typography> */}
                        </div>
                        <div>
                           <img className={css.image} src={block.image} alt="Image" />
                        </div>
                     </>
                  )}
                  {(index === 1 || index % 3 === 1) && (
                     <>
                        <div>
                           <img className={css.leftImage} src={block.image} />
                        </div>
                        <div className={css.right}>
                           <h2 className={css.heading}>{block.heading}</h2>
                           <p className={css.text}>{block.text}</p>
                        </div>
                     </>
                  )}
                  {(index === 2 || index % 3 === 2) && (
                     <>
                        <div className={css.left}>
                           <h2 className={css.heading}>{block.heading}</h2>
                           <p className={css.text}>{block.text}</p>
                        </div>
                        <div>
                           <img className={css.image} src={block.image} alt="Image" />
                        </div>
                     </>
                  )}
               </div>
            ))}
         </div>
      </section>
   );
};
