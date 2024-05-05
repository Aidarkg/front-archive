import { Banner } from "./section/banner/Banner.jsx";
import { ArchiveStatement } from "./section/archiveStatement/ArchiveStatement.jsx";
import { Gallery } from "./section/gallery/Gallery.jsx";
import { Codex } from "./section/codex/Codex.jsx";
import { Management } from "./section/management/Management.jsx";
import { Services } from "./section/services/Services.jsx";
import { HelpSection } from "./section/helpSection/HelpSection.jsx";

export const Main = () => {
   return (
      <section>
         <Banner />
         <ArchiveStatement />
         <Gallery />
         <Codex />
         <Management />
         <Services />
         <HelpSection />
      </section>
   );
};

export default Main;
// FIX ME исправить export и привести как все компоненты в единый стиль