import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDetailsThunk } from "../../store/thunks";
import { useSelector } from "react-redux";
import { selectProductDetails } from "../../store/products/selectors";
import { addItem } from "../../store/shopcart/slice";
import { selectCartItems } from "../../store/shopcart/selectors";
import { CommentForm } from "../../components/CommentForm/index";
import { fetchComments } from "../../store/comments/thunks";
import { selectAllComments } from "../../store/comments/selectors";

function DetailsPage() {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const productDetails = useSelector(selectProductDetails);
  const cartItems = useSelector(selectCartItems);
  const comments = useSelector(selectAllComments);
  console.log("comments::", comments);
  const itemId = cartItems.length + 1;
  //console.log("Details:", productDetails);
  const addProduct = () => {
    console.log("addProduct", productDetails?.id);
    const itemObject = {
      id: itemId,
      title: productDetails?.title,
      price: productDetails?.price,
      image: productDetails?.mainImage,
    };

    dispatch(addItem(itemObject));
  };

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
      <button onClick={addProduct}>Add to shopcart</button>
      <button>
        <Link to={"/"}>Back to Home Page</Link>
      </button>
      <CommentForm key={productDetails?.id} id={productDetails?.id} />
    </div>
  );
}

export { DetailsPage };
