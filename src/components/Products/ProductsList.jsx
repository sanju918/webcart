import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

import apiClient from "../../utils/api-client";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
        setErrors("");
      })
      .catch((err) => {
        setErrors(err.message);
        setProducts([]);
      });
  }, []);

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
          {errors && <em className="form_error">{errors}</em>}
          {products.map((product) => (
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
