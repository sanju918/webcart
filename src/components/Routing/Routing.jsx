import { Routes, Route } from "react-router-dom";

import LoginPage from "../Authentication/LoginPage";
import SignUp from "../Authentication/SignUp";
import CartPage from "../Cart/CartPage";
import MyOrder from "../MyOrder/MyOrder";
import HomePage from "../Home/HomePage";
import ProductsPage from "../Products/ProductsPage";
import SingleProductPage from "../SingleProduct/SingleProductPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/1" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/myorders" element={<MyOrder />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Routing;