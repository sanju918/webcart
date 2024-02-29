import "./MyOrder.css";
import Table from "../Common/Table";
import useData from "../../hooks/useData";
import Loader from "../Common/Loader";

const MyOrder = () => {
  const { data: orders, error, isLoading } = useData("/order");

  return (
    <>
      <section className="align_center my_order_page">
        {isLoading && <Loader />}
        {error && <em className="form_error">{error}</em>}
        {orders && (
          <Table headings={["#", "Order ID", "Products", "Total", "Status"]}>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order._id}</td>
                  <td>
                    {order.products.map((product, index) => (
                      <p key={product._id} style={{ whiteSpace: "pre-line" }}>
                        {product.product.title}({product.quantity})
                        {index !== order.products.length - 1 ? ", " : null}
                      </p>
                    ))}
                  </td>
                  <td>${order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </>
  );
};

export default MyOrder;
