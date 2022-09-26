import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDetailsThunk } from "../../store/thunks";
import { useSelector } from "react-redux";
import { selectProductDetails } from "../../store/products/selectors";

function DetailsPage() {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const productDetails = useSelector(selectProductDetails);
  //console.log("Details:", productDetails);

  useEffect(() => {
    dispatch(productDetailsThunk(productId));
  }, []);

  return (
    <div>
      <h3>Product's Details</h3>
      <button>
        <Link to={"/"}>Back to Home Page</Link>
      </button>
      <h3>{productDetails?.title}</h3>
      <h4>Category: {productDetails?.category.title}</h4>
      <h4>Rating: {productDetails?.rating}</h4>
      <h3>$ {productDetails?.price}</h3>
      <img src={productDetails?.mainImage} />
      <h4>{productDetails?.description}</h4>
      <button>
        <Link to={"/"}>Back to Home Page</Link>
      </button>
    </div>
  );
}

export { DetailsPage };
