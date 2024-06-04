import {Outlet, useLocation} from "react-router-dom";
import {Header} from "../../modules/header/Header.jsx";
import {ModalPage} from "../../modules/modalPage/ModalPage.jsx";
import {Loader} from "../../components/loader/Loader.jsx";
import {Footer} from "../../modules/footer/Footer.jsx";
import {useEffect} from "react";
import {useDataAll} from "./store.jsx";

export const  Layout = () => {

    const location =  useLocation();

    const { data, loading, error, getData } = useDataAll((state) => ({
        data: state.data,
        loading: state.loading,
        error: state.error,
        getData: state.getData,
    }));
    useEffect(() => {
        getData();
    }, [getData]);
    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Header/>
                <Outlet />
                {location.pathname !== "/faq" && <ModalPage />}
            <Footer/>
        </>
    );
};