import "./ProductsSidebar.css";
import LinkWithIcons from "../Navbar/LinkWithIcons";
import electronics from "../../assets/icons/electronics.png";

const ProductsSidebar = () => {
  return (
    <>
      <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_links">
          <LinkWithIcons
            title="Electronics"
            link="products?category=electronics"
            emoji={electronics}
            sidebar={true}
          />
        </div>
      </aside>
    </>
  );
};

export default ProductsSidebar;
