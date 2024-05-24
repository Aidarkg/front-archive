import {Outlet, useLocation} from "react-router-dom";
import {Header} from "../../modules/header/Header.jsx";
import {ModalPage} from "../../modules/modalPage/ModalPage.jsx";
import {Container} from "../../components/container/Container.jsx";
import {Loader} from "../../UI/loader/Loader.jsx";

export const  Layout = () => {
    const location =  useLocation();
    const isLoading = false;
    return (
        <>
            <Header/>
            <Container>
                {isLoading ? <Loader /> : <Outlet />}
            </Container>
            {location.pathname !== "/faq" && <ModalPage />}
        </>
    );
};