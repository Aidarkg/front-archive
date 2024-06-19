import {Outlet} from "react-router-dom";
import {Header} from "../../modules/header/Header.jsx";
import {ModalPage} from "../../modules/modalPage/ModalPage.jsx";
import {Footer} from "../../modules/footer/Footer.jsx";
import { useScrollToTop } from "../../hooks/useScrollToTop.js";


export const  Layout = () => {
    useScrollToTop();
    
    return (
        <>
            <Header/>
                <Outlet />
                {location.pathname !== "/faq" && <ModalPage />}
            <Footer/>
        </>
    );
};