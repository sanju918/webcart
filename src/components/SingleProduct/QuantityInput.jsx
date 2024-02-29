import "./QuantityInput.css";

const QuantityInput = ({
  quantity,
  stock,
  cartPage,
  productId,
  setQuantity,
}) => {
  return (
    <>
      <button
        className="quantity_input_button"
        disabled={quantity <= 1}
        onClick={() => {
          cartPage
            ? setQuantity("decrease", productId)
            : setQuantity(quantity - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <p className="quantity_input_count">{quantity}</p>
      <button
        className="quantity_input_button"
        disabled={quantity >= stock}
        onClick={() => {
          cartPage
            ? setQuantity("increase", productId)
            : setQuantity(quantity + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </>
  );
};

export default QuantityInput;
