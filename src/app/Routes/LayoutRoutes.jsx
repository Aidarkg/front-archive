import { Route, Routes } from "react-router-dom";
import * as LayoutPages from "../../pages/index.js";
import { Layout } from "../Layout/Layout.jsx";

const LayoutRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<LayoutPages.Main />} />
               <Route path="aboutArchive" element={<LayoutPages.AboutArchive />}/>
               <Route path="management" element={<LayoutPages.Management />} />
               <Route path="managementMore/:id" element={<LayoutPages.ManagementMore />} />
               <Route path="npa" element={<LayoutPages.Npa />} />
               <Route path="services" element={<LayoutPages.Services />} />
               <Route path="faq" element={<LayoutPages.Faq />} />
               <Route path="contacts" element={<LayoutPages.Contacts />} />
               <Route path="publications" element={<LayoutPages.Publications />}/>
               <Route path="publications/:id" element={<LayoutPages.DetailPublication />}/>
               <Route path="photo" element={<LayoutPages.Photo />} />
               <Route path="photo/:id" element={<LayoutPages.DetailPhoto />} />
               <Route path="video" element={<LayoutPages.Video />} />
               <Route path="video/:id" element={<LayoutPages.DetailVideo />} />
            </Route>
         </Routes>
         {/* /FIX ME  Замапить, и задать в новом формате роуты*/}
      </>
   );
};
export default LayoutRoutes;
