import {Route, Routes} from "react-router-dom";
import LayoutRoutes from "./app/Routes/LayoutRoutes.jsx";

function App() {
   return (
      <>
         <Routes>
            <Route path="*" element={<LayoutRoutes />} />
         </Routes>
      </>
   );
}

export default App;
