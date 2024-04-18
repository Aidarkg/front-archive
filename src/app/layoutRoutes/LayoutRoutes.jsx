import React from 'react';
import {Route, Routes} from "react-router-dom";
import * as LayoutPages from "../../pages/index.js"
const LayoutRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPages.Main/>} />
            <Route path="/aboutArchive" element={<LayoutPages.AboutArchive/>} />
            <Route path="/priceList" element={<LayoutPages.PriceList/>} />
            <Route path="/news" element={<LayoutPages.News/>} />
            <Route path="/normativeBase" element={<LayoutPages.NormativeBase/>} />
            <Route path="/faq" element={<LayoutPages.Faq/>} />
            <Route path="/address" element={<LayoutPages.Address/>} />
        </Routes>
    );
};

export default LayoutRoutes;