import { ContentBlocks } from "../../aboutArchive/contentBlocks/ContentBlocks";
import classes from ".././mainAboutArchive/MainAboutArchive.module.sass";

export const MainAboutArchive = () => {
   return (
      <div className={classes.contentBlocks}>
         <ContentBlocks
            showTitle={false}
            showButton={true}
            showBreadcrumbs={false}
            limit={1}
         />
      </div>
   );
};
