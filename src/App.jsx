import {Route, Routes} from "react-router-dom";
import LayoutRoutes from "./app/layoutRoutes/LayoutRoutes.jsx";
import { Header } from "./modules/header/Header.jsx";
import {Footer} from "./modules/footer/Footer.jsx";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="*" element={<LayoutRoutes />} />
         </Routes>
          <Footer/>
      </>
   );
}

export default App;
