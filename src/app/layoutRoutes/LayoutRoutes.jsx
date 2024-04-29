import { Route, Routes } from "react-router-dom";
import * as LayoutPages from "../../pages/index.js";
import { PATH } from "../PATH/index.js";

const LayoutRoutes = () => {
   return (
      <Routes>
         <Route path={PATH.main} element={<LayoutPages.Main />} />
         <Route path={PATH.aboutArchive} element={<LayoutPages.AboutArchive />}/>
         <Route path={PATH.priceList} element={<LayoutPages.PriceList />} />
         <Route path={PATH.news} element={<LayoutPages.News />} />
         <Route path={PATH.normativeBase} element={<LayoutPages.NormativeBase />}/>
         <Route path={PATH.faq} element={<LayoutPages.Faq />} />
         <Route path={PATH.address} element={<LayoutPages.Address />} />
      </Routes>
   );
};

export default LayoutRoutes;
