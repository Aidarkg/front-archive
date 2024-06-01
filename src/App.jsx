import {Route} from "react-router-dom";
import {Router}from "./app/Router/Router.jsx";

function App() {
   return (
      <>
         <Router>
             <Route path="*" element={<Router />} />
         </Router>
      </>
   );
}

export default App;
