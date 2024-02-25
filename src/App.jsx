import "./App.css";
import LoginPage from "./components/Authentication/LoginPage";
import SignUp from "./components/Authentication/SignUp";
// import CartPage from "./components/Cart/CartPage";
// import MyOrder from "./components/MyOrder/MyOrder";
import Navbar from "./components/Navbar/Navbar";

// import HomePage from "./components/Home/HomePage";
// import ProductsPage from "./components/Products/ProductsPage";
// import SingleProductPage from "./components/SingleProduct/SingleProductPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrder /> */}
        {/* <LoginPage /> */}
        <SignUp />
      </main>
    </div>
  );
};

export default App;
