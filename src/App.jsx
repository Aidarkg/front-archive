import {Route, Routes} from "react-router-dom";
import LayoutRoutes from "./app/layoutRoutes/LayoutRoutes.jsx";
import Header from "./components/header/Header.jsx";

function App() {

  return (
     <div>
         <Header/>
         <Routes>
             <Route path="*" element={<LayoutRoutes/>} />
         </Routes>
     </div>
  )
}

export default App
