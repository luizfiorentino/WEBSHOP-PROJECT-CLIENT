import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
import "./styles.css";

function DetailsPage() {
  const dispatch = useDispatch();
  const [text, setText] = useState("Rate this Product:");
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

  const toggleText = () => {
    setText(<span className="product-rated">Thanks for rating!</span>);
    console.log("text", text);
  };

  return (
    <div className="product-details-main">
      <div className="details-inner"></div>
      <div className="home-page-button">
        <button className="button-inner">
          <Link to={"/"}>Home Page</Link>
        </button>
      </div>
      <div className="product-details-call">
        <h3>Product's Details</h3>
      </div>
      <div className="rate-product-call">
        <h4>{text}</h4>
      </div>
      <div className="star-rating-call" onClick={toggleText}>
        <StarRating />
      </div>
      <div className="product-title">
        <h3>{productDetails?.title}</h3>
      </div>

      <h3 className="product-price">
        {" "}
        Price:{" "}
        <span className="emphasis-description">$ {productDetails?.price}</span>
      </h3>
      <div className="product-image">
        <img src={productDetails?.mainImage} />
      </div>
      <div className="product-description">
        <h4>{productDetails?.description}</h4>
      </div>
      <div className="product-category">
        <li>
          Category:{" "}
          <span className="emphasis-description">
            {productDetails?.category.title}
          </span>
        </li>
      </div>
      <div className="product-rating">
        <li>
          Rating:{" "}
          <span className="emphasis-description">{productDetails?.rating}</span>
        </li>
      </div>

      {token ? (
        <div className="home-page-button">
          <button className="button-inner" onClick={addProduct}>
            Add to shopcart
          </button>
        </div>
      ) : // <button className="shop-cart-button" onClick={addProduct}>
      //   Add to shopcart
      // </button>
      null}
      <div className="review-area">
        {!token ? (
          <h4>Please log in to post your review</h4>
        ) : (
          <CommentForm key={productDetails?.id} id={productDetails?.id} />
        )}
        <h4>See what costumers think about this product:</h4>
        {commentsForThisProduct.length === 0 ? (
          <h5>There are currently no reviews for this product</h5>
        ) : (
          <p>Total reviews: {commentsForThisProduct.length}</p>
        )}
        <ul>
          {comments
            ? commentsForThisProduct.map((comment) => (
                <li>{comment.comment}</li>
              ))
            : null}
        </ul>
      </div>

      <div className="home-page-button">
        <button className="button-inner">
          <Link to={"/"}>Home Page</Link>
        </button>
      </div>
      <div className="footer-hp">
        <div className="footer-text">
          <p className="costumer-call">
            We're happy to help or get any suggestion from you! Please send an
            email to our costumer's center:{" "}
            <span className="costumer-center-email">
              contact@online-shop.com
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export { DetailsPage };
