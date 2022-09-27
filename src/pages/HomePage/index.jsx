import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsThunk } from "../../store/thunks";
import { selectAllProducts } from "../../store/products/selectors";
import ProductCard from "../../components/ProductCard/index.jsx";
import { NavBar } from "../../components/NavBar";
import { selectProductSearch } from "../../store/products/selectors";
import { selectCategoryData } from "../../store/categories/selectors";
import { allCategoriesThunk } from "../../store/categories/thunks";

// FEATURES TO IMPLEMENT
// OK - 1) searchbar a) product by name and b) category
// 2) checkbox filter products by category
// 3) pagination
// 4) shopping cart
// 5) add/ viewing review
// 6) login/ registration
// 7) orders
// 8) footer
// correct DB categories

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const categories = useSelector(selectCategoryData);
  //console.log("categories:", categories);
  const searchState = useSelector(selectProductSearch);
  console.log("from HP, search state", searchState);
  const [category, setCategory] = useState("all");
  console.log("category::", category);

  useEffect(() => {
    dispatch(allProductsThunk);
  }, [dispatch]);

  useEffect(() => {
    dispatch(allCategoriesThunk);
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
  //filterProductsByCategory();

  // const productFilter = products?.filter((product) => {
  //   if (searchState === "" || !searchState) {
  //     return product;
  //   } else {
  //     return (
  //       product.title.toLowerCase().includes(searchState?.toLowerCase()) ||
  //       product?.category?.title
  //         .toLowerCase()
  //         .includes(searchState?.toLowerCase())
  //     );
  //   }
  // });

  const displayProducts = () => {
    if (searchState === "") {
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
