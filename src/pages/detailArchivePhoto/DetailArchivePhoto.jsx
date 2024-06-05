import {useParams} from "react-router-dom";
import {Typography} from "../../Typography/Typography.jsx";

export const DetailArchivePhoto = () => {
    const {id}=useParams();
    return (
        <div>
            <Typography variant="h1">{id}</Typography>
        </div>
    );
};
