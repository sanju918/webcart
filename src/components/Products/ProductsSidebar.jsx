import "./ProductsSidebar.css";
import LinkWithIcons from "../Navbar/LinkWithIcons";
import useData from "../../hooks/useData";

const ProductsSidebar = () => {
  const { data: categories, error } = useData("/category");
  return (
    <>
      <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_links">
          {error ? <em className="form_error">{error}</em> : null}
          {categories &&
            categories.map((category) => (
              <LinkWithIcons
                key={category._id}
                title={category.name}
                sidebar={true}
                emoji={`http://localhost:5001/category/${category.image}`}
                link={`/products?category=${category.name}`}
              />
            ))}
        </div>
      </aside>
    </>
  );
};

export default ProductsSidebar;
