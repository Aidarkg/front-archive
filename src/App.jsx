import { Route, Routes } from "react-router-dom";
import LayoutRoutes from "./app/layoutRoutes/LayoutRoutes.jsx";
import { Header } from "./components/header/Header.jsx";

function App() {
   const name = "James";

   const person = { first: name };

   console.log(person);
   console.log();
   console.error("Error message");
   const sayHelloLinting = fName => {
      console.log(`Hello linting, ${fName}`);
   };
   return (
      <div>
         <Header />
         <Routes>
            <Route path="*" element={<LayoutRoutes />} />
         </Routes>
      </div>
   );
}

export default App;
