import { Route, Routes } from "react-router-dom";
import * as LayoutPages from "../../pages/index.js";
import { Layout } from "../Layout/Layout.jsx";
import {PATH} from "../../utils/constants/Constants.js";

export const Router = () => {
   return (
      <>
         <Routes>
            <Route path={PATH.main} element={<Layout />} >
               <Route index element={<LayoutPages.Main />} />
               <Route path={PATH.aboutArchive} element={<LayoutPages.AboutArchive />} />
               <Route path={PATH.management} element={<LayoutPages.Management />} />
               <Route path={PATH.managementMore} element={<LayoutPages.ManagementMore />} />
               <Route path={PATH.npa} element={<LayoutPages.Npa />} />
               <Route path={PATH.services} element={<LayoutPages.Services />} />
               <Route path={PATH.faq} element={<LayoutPages.Faq />} />
               <Route path={PATH.contacts} element={<LayoutPages.Contacts />} />
               <Route path={PATH.publications} element={<LayoutPages.Publications />}/>
               <Route path={PATH.detailPublication} element={<LayoutPages.DetailPublication />}/>
               <Route path={PATH.photo} element={<LayoutPages.Photo />} />
               <Route path={PATH.detailPhoto} element={<LayoutPages.DetailPhoto />} />
               <Route path={PATH.video} element={<LayoutPages.Video />} />
               <Route path={PATH.detailVideo} element={<LayoutPages.DetailVideo />} />
               <Route path={PATH.search} element={<LayoutPages.SearchResults />} />
               <Route path={PATH.notFound} element={<LayoutPages.Errors />} />
            </Route>
         </Routes>
      </>
   );
};

