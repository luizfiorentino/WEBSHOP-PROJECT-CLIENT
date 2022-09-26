import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsThunk } from "../../store/thunks";
import { selectAllProducts } from "../../store/products/selectors";
import ProductCard from "../../components/ProductCard/index.jsx";
import { NavBar } from "../../components/NavBar";
import { selectProductSearch } from "../../store/products/selectors";

// FEATURES TO IMPLEMENT
// OK - 1) searchbar a) product by name and b) category
// 2) checkbox filter products by category
// 3) pagination
// 4) shopping cart
// 5) add/ viewing review
// 6) login/ registration
// 7) orders
// 8) footer

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const searchState = useSelector(selectProductSearch);
  console.log("from HP, search state", searchState);

  useEffect(() => {
    dispatch(allProductsThunk);
  }, [dispatch]);

  const productFilter = products?.filter((product) => {
    if (searchState === "" || !searchState) {
      return product;
    } else {
      return (
        product.title.toLowerCase().includes(searchState?.toLowerCase()) ||
        product?.category?.title
          .toLowerCase()
          .includes(searchState?.toLowerCase())
      );
    }
  });

  return (
    <div>
      <h2>Welcome to onlineShop homepage!</h2>

      <ul>
        {productFilter ? (
          productFilter.map((product) => (
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
