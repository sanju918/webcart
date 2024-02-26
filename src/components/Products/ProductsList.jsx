import ProductCard from "./ProductCard";
import "./ProductsList.css";

import useData from "../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const { data, error, isLoading } = useData(
    "/products",
    {
      params: { category },
    },
    [category]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <section className="products_list_section">
        <header className="align_center products_list_header">
          <h2>Products</h2>
          <select name="sort" id="" className="products_sorting">
            <option value="">Relevance</option>

            <option value="price desc">Price High to Low</option>
            <option value="price asc">Price Low to High</option>
            <option value="rate asc">Rating Low to High</option>
            <option value="rate asc">Rating Low to High</option>
          </select>
        </header>
        <div className="products_list">
          {error && <em className="form_error">{error}</em>}
          {isLoading &&
            skeletons.map((item) => <ProductCardSkeleton key={item} />)}
          {data?.products &&
            data.products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.images[0]}
                price={product.price}
                title={product.title}
                rating={product.reviews.rate}
                ratingCounts={product.reviews.counts}
                stock={product.stock}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default ProductsList;
