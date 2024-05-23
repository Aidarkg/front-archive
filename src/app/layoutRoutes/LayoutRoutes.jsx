import {Route, Routes, useLocation} from "react-router-dom";
import * as LayoutPages from "../../pages/index.js";
import {ModalPage} from "../../shared/modalPage/ModalPage.jsx";

const LayoutRoutes = () => {
      const location =  useLocation();
   return (
      <>
        <Routes>
              <Route path="/" element={<LayoutPages.Main />} />
              <Route path="/aboutArchive" element={<LayoutPages.AboutArchive />} />
              <Route path="/management" element={<LayoutPages.Management />} />
              <Route path="/mediaArchive" element={<LayoutPages.MediaArchive />} />
              <Route path="/npa" element={<LayoutPages.Npa />} />
              <Route path="/services" element={<LayoutPages.Services />} />
              <Route path="/faq" element={<LayoutPages.Faq />} />
              <Route path="/contacts" element={<LayoutPages.Contacts />} />
              <Route path="/publications" element={<LayoutPages.Publications />} />
              <Route path="/publications/:id" element={<LayoutPages.DetailPublication/>} />
              <Route path="/photo" element={<LayoutPages.Photo />} />
              <Route path="/photo/:id" element={<LayoutPages.DetailPhoto />} />
              <Route path="/video" element={<LayoutPages.Video />} />
              <Route path="/video/:id" element={<LayoutPages.DetailVideo />} />
        </Routes>
            {location.pathname !== "/faq" && <ModalPage />}
      </>
   );
};
export default LayoutRoutes;
