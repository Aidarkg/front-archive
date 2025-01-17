import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./app/styles/global.sass";
import { BrowserRouter } from "react-router-dom";
import "./utils/i18n/i18n.js";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n/i18n.js";
import {Suspense} from "react";
import {Loader} from "./components/loader/Loader.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <I18nextProvider i18n={i18n}>
         <Suspense fallback={<Loader/>}>
             <App />
         </Suspense>
      </I18nextProvider>
   </BrowserRouter>
);

App.displayName = "App";
