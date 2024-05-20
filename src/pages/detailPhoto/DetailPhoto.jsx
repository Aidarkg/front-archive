import React from 'react';
import {useParams} from "react-router-dom";

export const DetailPhoto = () => {
    const {id}=useParams()
    return (
        <div style={{marginTop: 100}}>
           <h1>{id} фото</h1>
        </div>
    );
};

