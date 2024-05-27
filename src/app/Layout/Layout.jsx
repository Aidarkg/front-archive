import {Outlet, useLocation} from "react-router-dom";
import {Header} from "../../modules/header/Header.jsx";
import {ModalPage} from "../../modules/modalPage/ModalPage.jsx";
import {Loader} from "../../components/loader/Loader.jsx";

export const  Layout = () => {
    const location =  useLocation();
    const isLoading = false;
    return (
        <>
            <Header/>
                {isLoading ? <Loader /> : <Outlet />}
            {location.pathname !== "/faq" && <ModalPage />}
        </>
    );
};