import "./App.css";
import CartPage from "./components/Cart/CartPage";
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
        <CartPage />
      </main>
    </div>
  );
};

export default App;
