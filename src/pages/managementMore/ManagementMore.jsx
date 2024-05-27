
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loader/Loader.jsx";
import {useDataMore} from "./store/store.jsx";

export const ManagementMore = () => {
    const { id } = useParams();
    const { data, loading, error, getData } = useDataMore();
    // console.log(data, "kkkkkkkkkkkkkkkkkk");

    useEffect(() => {
        getData(id);
    }, [id, getData]);
    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return(
        <div>
            {
                data
            }
            <h1>Testing{id}</h1>
        </div>
    );
};