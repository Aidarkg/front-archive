import {useData} from "../management/store/Store.jsx";
import {useEffect} from "react";

export const ManagementMore = () => {
    const { data, loading, error, getData } = useData();

    useEffect(() => {
        getData();
    }, [getData]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return(
        <div>
            {
                // Array.isArray(data) && // Проверяем, что data является массивом
                data.results &&  data?.results.map((item, index) => <li key={index}>{item.position}</li>)
            }
        </div>
    );
};