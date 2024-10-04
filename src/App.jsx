import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./assets/components/header/Header";
import Home from "./assets/components/home/Home";
import LogIn from "./assets/components/logIn/LogIn";
import Wishlist from "./assets/components/wishlist/Wishlist";
import Cart from "./assets/components/cart/Cart";
import AllProduct from "./assets/components/allProduct/AllProduct";
import Men from "./assets/components/men/Men";
import Women from "./assets/components/women/Women";
import Jewelery from "./assets/components/jewelery/Jewelery";
import Electronics from "./assets/components/electronics/Electronics";
import Footer from "./assets/components/footer/Footer";
import { CartProvider } from "./assets/components/context/context";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter class="flexApp">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="" element={<AllProduct />} />
              <Route path="men" element={<Men />} />
              <Route path="women" element={<Women />} />
              <Route path="jewelery" element={<Jewelery />} />
              <Route path="electronics" element={<Electronics />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
