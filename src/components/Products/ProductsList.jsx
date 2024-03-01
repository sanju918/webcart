import ProductCard from "./ProductCard";
import "./ProductsList.css";

import useData from "../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useNavigate, useSearchParams } from "react-router-dom";
// import Pagination from "../Common/Pagination";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [search] = useSearchParams();
  const category = search.get("category");
  const searchQuery = search.get("search");

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const navigate = useNavigate();

  const { data, error, isLoading } = useData(
    "/products",
    {
      params: { search: searchQuery, category, page },
    },
    [searchQuery, category, page]
  );

  useEffect(() => {
    setPage(1);
  }, [category, searchQuery]);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // Handles pagination
  // const handlePageChange = () => {
  //   const currentParams = Object.fromEntries([...search]);
  //   setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 });
  // };

  // Infinite Scrolling
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 1 &&
        !isLoading &&
        data &&
        page < data.totalPages
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, isLoading]);

  const handleClick = (product_id) => {
    navigate(`/api/products/${product_id}`);
  };

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
          {data?.products &&
            data.products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          {isLoading &&
            skeletons.map((item) => <ProductCardSkeleton key={item} />)}
        </div>

        {/* commented out for pagination */}
        {/* {data && (
          <Pagination
            totalPosts={data.totalProducts}
            postsPerPage={8}
            onClick={handlePageChange}
            currentPage={page}
          />
        )} */}
      </section>
    </>
  );
};

export default ProductsList;
