import "./FeatureProducts.css";
import ProductCard from "../Products/ProductCard";

const FeatureProdcuts = () => {
  return (
    <>
      <section className="featured_products">
        <h2>Featured Products</h2>
        <div className="align_center featured_products_list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
};

export default FeatureProdcuts;
