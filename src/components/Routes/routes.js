import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../InitialPage/index";
import Pokemon from "../PageCards";

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