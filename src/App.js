import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Products from "./pages/products/products";
import ProductPage from "./pages/product/product";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;