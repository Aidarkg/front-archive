import { Route, Routes } from "react-router-dom";
import * as LayoutPages from "../../pages/index.js";
const LayoutRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<LayoutPages.Main />} />
         <Route path="/aboutArchive" element={<LayoutPages.AboutArchive />} />
         <Route path="/mediaArchive" element={<LayoutPages.MediaArchive />} />
         <Route path="/npa" element={<LayoutPages.Npa />} />
         <Route path="/services" element={<LayoutPages.Services />} />
         <Route path="/faq" element={<LayoutPages.Faq />} />
         <Route path="/contacts" element={<LayoutPages.Contacts />} />
         <Route path="/publications" element={<LayoutPages.Publications />} />
         <Route path="/photo" element={<LayoutPages.Photo />} />
         <Route path="/video" element={<LayoutPages.Video />} />

      </Routes>
   );
};

export default LayoutRoutes;
