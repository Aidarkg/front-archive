import css from "./ContentBlocks.module.sass";

export const ContentBlocks = ({ blocks }) => {
  return (
     <section>
        <div className={css.contentContainer}>       
          {blocks.map((block, index) => (
            <div key={index} className={css.contentBlock}>
               {index % 3 === 0 && (
                <>
                  <h2>{block.heading}</h2>
                  <div className={css.text}>{block.text}</div>
                  <div className={css.image4}><img src={block.image4} alt="Image"/></div>
                </>
               )}
               {index % 3 === 1 && (
                <>
                  <div className={css.image4}><img src={block.image4} alt="Image"/></div>
                  <h2>{block.heading}</h2>
                  <div className={css.text}>{block.text}</div>
                </>
               )}
               {index % 3 === 2 && (
                <>
                  <h2>{block.heading}</h2>
                  <div className={css.text}>{block.text}</div>
                  <div className={css.image4}><img src={block.image4} alt="Image" /></div>
                </>
               )}
            </div>
          ))}       
        </div>
     </section>
  );
};


