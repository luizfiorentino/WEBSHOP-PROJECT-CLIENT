import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsThunk } from "../../store/thunks";
import { selectAllProducts } from "../../store/products/selectors";
import ProductCard from "../../components/ProductCard/index.jsx";
import { selectProductSearch } from "../../store/products/selectors";
import { selectCategoryData } from "../../store/categories/selectors";
import { allCategoriesThunk } from "../../store/categories/thunks";
import { selectCartItems } from "../../store/shopcart/selectors";
import { Link } from "react-router-dom";
import { allCommentsThunk } from "../../store/comments/thunks";
import "./styles.css";

// FEATURES TO IMPLEMENT
// OK - 1) searchbar a) product by name and b) category
// OK - 2) checkbox filter products by category
// OK 3) pagination
// OK - 4) shopping cart
// 4a) feature to avoid repeated items, instead shows one time and number of same items chosen -> eg. filter: includes().prodId
// OK 5) add/ viewing review
// OK 6) login/ registration
// OK 7) orders
// OK ::IMPLEMENT: user can only add to shop cart and place order when logged in::
// OK Product avaliation stars (a) from DB in home page and (b) client evaluation in details page
// 7A) payment page -> DB new table
// OK 8) functional rating (stars)
// 9) footer
// 10) correct DB categories

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const categories = useSelector(selectCategoryData);
  //console.log("categories:", categories);
  const searchState = useSelector(selectProductSearch);
  const shopCartItems = useSelector(selectCartItems);
  console.log("shopCartItems", shopCartItems);
  console.log("from HP, search state", searchState);
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleClick = (event) => {
    setCurrentPage(parseInt(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = products.slice(indexFirstItem, indexLastItem);

  const displayPageNumbers = pages.map((pageNumber) => {
    return (
      <li
        key={pageNumber}
        id={pageNumber}
        onClick={handleClick}
        className={currentPage === pageNumber ? "active" : null}
      >
        {pageNumber}
      </li>
    );
  });

  console.log("category::", category);

  useEffect(() => {
    dispatch(allProductsThunk);
  }, [dispatch]);

  useEffect(() => {
    dispatch(allCategoriesThunk);
  }, [dispatch]);

  useEffect(() => {
    dispatch(allCommentsThunk);
  }, [dispatch]);

  function filterProductsByCategory() {
    if (!products || !category) {
      return <p>"loading"</p>;
    } else {
      if (category === "all") {
        return [...products];
      } else if (category === "Electronics") {
        return [...products].filter(
          (product) => product.category.title === "Electronics"
        );
      } else if (category === "Women's Clothing") {
        return [...products].filter(
          (product) => product?.category?.title === "Women's Clothing"
        );
      } else if (category === "Men's Clothing") {
        return [...products].filter(
          (product) => product.category.title === "Men's Clothing"
        );
      } else if (category === "Jewelery") {
        return [...products].filter(
          (product) => product.category.title === "Jewelery"
        );
      }
    }
  }

  const displayProducts = () => {
    if (searchState === "" && category === "all") {
      return currentItems;
    } else if (searchState === "" && category !== "all") {
      return filterProductsByCategory();
    } else if (searchState !== "") {
      return [...products].filter((product) => {
        return (
          product.title.toLowerCase().includes(searchState?.toLowerCase()) ||
          product?.category?.title
            .toLowerCase()
            .includes(searchState?.toLowerCase())
        );
      });
    } else {
      return filterProductsByCategory();
    }
  };

  return (
    <div>
      <button>
        <Link to="/shopcart">Shopcart</Link>
      </button>
      <h2>Welcome to onlineShop homepage!</h2>
      {/* {categories.map((category) => {
        return (
          <label>
            <input key={category.id} type="checkbox" value={category} />
            {category.title}
          </label>
        );
      })} */}
      <h3>Choose a category</h3>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All products</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          );
        })}
      </select>
      <ul className="pageNumbers">
        {category === "all" ? displayPageNumbers : null}
      </ul>

      <ul>
        {displayProducts() ? (
          displayProducts()?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category.title}
              // categoryId={product.categoryId}
              image={product.mainImage}
              price={product.price}
              rating={product.rating}
              // description={product.description}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
}

export { HomePage };
