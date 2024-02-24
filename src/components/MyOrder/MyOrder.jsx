import "./MyOrder.css";
import Table from "../Common/Table";

const MyOrder = () => {
  return (
    <>
      <section className="align_center my_order_page">
        <Table headings={["Order", "Products", "Total", "Status"]}>
          <tbody>
            <tr>
              <td>1</td>
              <td>iPhone 14, Mi Powerbank 20000 MAh</td>
              <td>$1299</td>
              <td>Shipped</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default MyOrder;
