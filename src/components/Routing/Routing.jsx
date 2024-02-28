import { Routes, Route } from "react-router-dom";

import LoginPage from "../Authentication/LoginPage";
import SignUp from "../Authentication/SignUp";
import CartPage from "../Cart/CartPage";
import MyOrder from "../MyOrder/MyOrder";
import HomePage from "../Home/HomePage";
import ProductsPage from "../Products/ProductsPage";
import SingleProductPage from "../SingleProduct/SingleProductPage";
import Logout from "../Authentication/Logout";

const Routing = ({ addToCart, getCart, cart }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/:id"
          element={<SingleProductPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage getCart={getCart} cart={cart} />}
        />
        <Route path="/myorders" element={<MyOrder />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default Routing;
