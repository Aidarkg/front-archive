import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AboutArchive } from "../page/aboutArchive/AboutArchive.jsx";

export const BLink = () => {
   return (
      <Router>
         <div>
            <Link to="/aboutArchive">About Archive</Link>
            <Route path="aboutArchive">{AboutArchive}</Route>
         </div>
      </Router>
   );
};
