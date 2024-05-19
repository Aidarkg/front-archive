import css from "./ContentBlocks.module.sass";

export const ContentBlocks = ({ blocks }) => {
   return (
      <section className={css.main}>
         <h1 className={css.h1}>Об архиве</h1>
         <div className={css.contentContainer}>
            {blocks.map((block, index) => (
               <div key={index} className={css.contentBlock}>
                  {(index === 0 || index % 3 === 0) && (
                     <>
                        <div className={css.left}>
                           <h2 className={css.heading}>{block.heading}</h2>
                           <div className={css.text}>{block.text}</div>
                        </div>
                        <div className="right">
                           <img className={css.image} src={block.image} alt="Image" />
                        </div>
                     </>
                  )}
                  {(index === 1 || index % 3 === 1) && (
                     <>
                        <div className="left">
                           <img className={css.leftImage} src={block.image} />
                        </div>
                        <div className={css.right}>
                           <h2 className={css.heading}>{block.heading}</h2>
                           <div className={css.text}>{block.text}</div>
                        </div>
                     </>
                  )}
                  {(index === 2 || index % 3 === 2) && (
                     <>
                        <div className={css.left}>
                           <h2 className={css.heading}>{block.heading}</h2>
                           <div className={css.text}>{block.text}</div>
                        </div>
                        <div className="right">
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
