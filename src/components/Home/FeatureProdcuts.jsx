import "./FeatureProducts.css";
import ProductCard from "../Products/ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";

const FeatureProdcuts = () => {
  const skeletons = [1, 2, 3];
  const { data: products, error, isLoading } = useData("/products/featured");

  return (
    <>
      <section className="featured_products">
        <h2>Featured Products</h2>
        <div className="align_center featured_products_list">
          {error && <em className="form_error">{error}</em>}
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          {isLoading &&
            skeletons.map((item) => <ProductCardSkeleton key={item} />)}
        </div>
      </section>
    </>
  );
};

export default FeatureProdcuts;
