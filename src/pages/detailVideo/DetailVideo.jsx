import React from 'react';
import {useParams} from "react-router-dom";

export const DetailVideo = () => {
    const {id}=useParams();
    return (
        <div style={{marginTop: 100}}>
            <h1>{id} video</h1>
        </div>
    );
};

