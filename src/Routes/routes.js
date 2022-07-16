import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/InitialPage/index"
import Pokemon from "../pages/PageCards";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Pokemon />} path="/pokemon" />
            </Routes>
        </BrowserRouter>
    )
}