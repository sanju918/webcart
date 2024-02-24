import "./QuantityInput.css";

const QuantityInput = () => {
  return (
    <>
      <button className="quantity_input_button" disabled={true}>
        {" "}
        -{" "}
      </button>
      <p className="quantity_input_count">1</p>
      <button className="quantity_input_button" disabled={false}>
        {" "}
        +{" "}
      </button>
    </>
  );
};

export default QuantityInput;
