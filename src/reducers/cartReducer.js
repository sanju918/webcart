const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (item) => item.product._id === product._id
      ); // Get the index of the current product

      if (productIndex === -1) {
        // If the product is not there it will return -1 as index
        updatedCart.push({ product, quantity }); // Since the product is not found, we simply add the product to the array
      } else {
        updatedCart[productIndex].quantity += quantity; // Since the product is found, we will increase the product's quantity by the quantity of the new value
      }
      return updatedCart;
    }

    case "GET_CART":
      return action.payload.products;

    case "REVERT_CART":
      return action.payload.cart;

    case "REMOVE_FROM_CART": {
      const oldCart = [...cart];
      const newCart = oldCart.filter(
        (item) => item.product._id !== action.payload.id
      );
      return newCart;
    }
  }
};

export default cartReducer;
