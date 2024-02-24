import "./CartPage.css";
import user from "../../assets/icons/user.webp";
import remove from "../../assets/icons/remove.png";
import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";

const CartPage = () => {
  return (
    <>
      <section className="align_center cart_page">
        <div className="align_center user_info">
          <img src={user} alt="user profile" />
          <div>
            <p className="user_name">Sanjay Patel</p>
            <p className="user_email">sanjaypatel@gmail.com</p>
          </div>
        </div>
        <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
          <tbody>
            <tr>
              <td>iPhone 14</td>
              <td>$999</td>
              <td className="align_center table_quantity_input">
                <QuantityInput />
              </td>
              <td>$999</td>
              <td>
                <img
                  src={remove}
                  alt="remove icon"
                  className="cart_remove_icon"
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <table className="cart_bill">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$999</td>
            </tr>
            <tr>
              <td>Shipping Charge</td>
              <td>$5</td>
            </tr>
            <tr className="cart_bill_final">
              <td>Total</td>
              <td>$1004</td>
            </tr>
          </tbody>
        </table>
        <button className="search_button checkout_button">Checkout</button>
      </section>
    </>
  );
};

export default CartPage;
