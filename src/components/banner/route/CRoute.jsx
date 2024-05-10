import { BrowserRouter as Router, Route } from "react-router-dom";
import { AboutArchive } from "../page/aboutArchive/AboutArchive";

export const CRoute = () => {
  return (
    <Router>
        <div> 
           <Route path="aboutArchive" element={<AboutArchive />} />
        </div>
    </Router>
  );
};
