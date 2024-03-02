import { useCallback, useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import cartReducer from "./reducers/cartReducer";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { getUser, logout } from "./services/userServices";
import { getJwt } from "./services/userServices";
import setAuthToken from "./utils/setAuthToken";
import {
  addToCartAPI,
  decreaseProductAPI,
  getCartAPI,
  increaseProductAPI,
  removeFromCartAPI,
} from "./services/cartServices";
import UserContext from "./contexts/UserContext";
import CartContext from "./contexts/CartContext";

setAuthToken(getJwt());

const App = () => {
  const [user, setUser] = useState(null);
  // const [cart, setCart] = useState([]);

  const [cart, dispatchCart] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const jwtUser = getUser();

      // check if token is invalid
      if (Date.now() >= jwtUser.exp * 1000) {
        logout();
        setUser(null);
        location.reload(); // reload the page once the token is removed
      } else {
        setUser(jwtUser); // sets token to local storage as token is valid
      }
    } catch (error) {
      // do nothing if token is not found
    }
  }, []);

  useEffect(() => {
    if (user) {
      // only accessible if logged in by user
      getCart();
    }
  }, [user]); // When user changes it will re-run the api

  const addToCart = useCallback(
    (product, quantity) => {
      // const updatedCart = [...cart];
      // const productIndex = updatedCart.findIndex(
      //   (item) => item.product._id === product._id
      // ); // Get the index of the current product

      // if (productIndex === -1) {
      //   // If the product is not there it will return -1 as index
      //   updatedCart.push({ product, quantity }); // Since the product is not found, we simply add the product to the array
      // } else {
      //   updatedCart[productIndex].quantity += quantity; // Since the product is found, we will increase the product's quantity by the quantity of the new value
      // }

      dispatchCart({ type: "ADD_TO_CART", payload: { product, quantity } });
      // setCart(updatedCart); // At the end we update the state variable for cart

      addToCartAPI(product._id, quantity)
        .then((res) => {
          toast.success("Product added to cart.");
        })
        .catch((err) => {
          toast.error(
            `Uh oh! Failed to add to cart. ${err.response.data.message}`
          );
          dispatchCart({ type: "REVERT_CART", payload: { cart } });
        });
    },
    [cart]
  );

  const getCart = useCallback(() => {
    getCartAPI()
      .then((res) => {
        dispatchCart({ type: "GET_CART", payload: { products: res.data } });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
      });
  }, [user]);

  const removeFromCart = useCallback(
    (id) => {
      // const oldCart = [...cart];
      // const newCart = oldCart.filter((item) => item.product._id !== id);
      // setCart(newCart);

      dispatchCart({ type: "REMOVE_FROM_CART", payload: { id } });

      removeFromCartAPI(id)
        .then((res) => toast.info("Product removed from cart"))
        .catch((err) => {
          toast.error("Couldn't remove item from the cart. Please try again.");
          dispatchCart({ type: "REVERT_CART", payload: { cart } });
        });
    },
    [cart]
  );

  const updateCart = useCallback(
    (type, id) => {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (item) => item.product._id === id
      );

      if (type === "increase") {
        updatedCart[productIndex].quantity += 1;
        dispatchCart({ type: "GET_CART", payload: { products: updatedCart } });

        increaseProductAPI(id).catch((err) => {
          toast.error("Something went wrong!");
          dispatchCart({ type: "REVERT_CART", payload: { cart } });
        });
      }
      if (type === "decrease") {
        updatedCart[productIndex].quantity -= 1;
        dispatchCart({ type: "GET_CART", payload: { products: updatedCart } });

        decreaseProductAPI(id).catch((err) => {
          toast.error("Something went wrong!");
          dispatchCart({ type: "REVERT_CART", payload: { cart } });
        });
      }
    },
    [cart]
  );

  return (
    <UserContext.Provider value={user}>
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, updateCart }}
      >
        <div className="app">
          <Navbar />
          <main>
            <ToastContainer position="bottom-right" />
            <Routing />
          </main>
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
