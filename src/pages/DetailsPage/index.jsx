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
import { selectAllComments } from "../../store/comments/selectors";
import { selectToken } from "../../store/users/selectors";
import { StarRating } from "../../components/StarRating";

function DetailsPage() {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const productDetails = useSelector(selectProductDetails);
  const cartItems = useSelector(selectCartItems);
  const comments = useSelector(selectAllComments);
  console.log("comments::", comments);
  const itemId = cartItems.length + 1;
  const token = useSelector(selectToken);
  //console.log("Details:", productDetails);

  const commentsForThisProduct = comments.filter(
    (comment) => comment.productId === productDetails?.id
  );

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
  }, [dispatch]);

  return (
    <div>
      <button>
        <Link to={"/"}>Back to Home Page</Link>
      </button>
      <h3>Product's Details</h3>
      <h4>Rate this product</h4>
      <StarRating />

      <h3>{productDetails?.title}</h3>
      <h4>Category: {productDetails?.category.title}</h4>
      <h4>Rating: {productDetails?.rating}</h4>
      <h3>$ {productDetails?.price}</h3>
      <img src={productDetails?.mainImage} />
      <h4>{productDetails?.description}</h4>
      {token ? <button onClick={addProduct}>Add to shopcart</button> : null}

      <button>
        <Link to={"/"}>Back to Home Page</Link>
      </button>
      {!token ? (
        <h4>Please log in to post your review</h4>
      ) : (
        <CommentForm key={productDetails?.id} id={productDetails?.id} />
      )}
      <h4>See what costumers think of our products:</h4>
      {commentsForThisProduct.length === 0 ? (
        <h5>There are currently no reviews for this product</h5>
      ) : (
        <p>Total reviews: {commentsForThisProduct.length}</p>
      )}
      <ul>
        {comments
          ? commentsForThisProduct.map((comment) => <li>{comment.comment}</li>)
          : null}
      </ul>
    </div>
  );
}

export { DetailsPage };
