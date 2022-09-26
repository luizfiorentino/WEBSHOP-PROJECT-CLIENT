import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsThunk } from "../../store/thunks";
import { selectAllProducts } from "../../store/products/selectors";
// import { ProductCard } from "../../components/ProductCard/index.jsx";
import ProductCard from "../../components/ProductCard/index.jsx";

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(allProductsThunk);
  }, [dispatch]);

  return (
    <div>
      <h2>Welcome to onlineShop homepage!</h2>
      <ul>
        {products ? (
          // products.map((product) => <li key={product.id}>{product.title}</li>)
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
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
