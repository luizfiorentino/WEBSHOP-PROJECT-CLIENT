import React from "react";
import "./styles.css";
import { addItem } from "../../store/shopcart/slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/shopcart/selectors";
import { selectToken } from "../../store/users/selectors";
import { ProductStarRating } from "../ProductStarRating";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const itemId = cartItems.length + 1;
  const token = useSelector(selectToken);

  const addProduct = () => {
    console.log("addProduct", props.id);
    const itemObject = {
      id: itemId,
      title: props.title,
      price: props.price,
      image: props.image,
    };

    dispatch(addItem(itemObject));
  };

  return (
    <div className="product-card-main">
      <Link className="pc-link" to={`/products/${props.id}`}>
        <h3>{props.title}</h3>
        {/* <h4>Rating: {props.rating}</h4> */}
        <ProductStarRating key={props.id} rating={props.rating} />
        <img
          className="product-card-image"
          src={props.image}
          alt={props.title}
        />
        <h4>$ {props.price}</h4>{" "}
        <div className="product-card-button">
          {token ? (
            <button onClick={addProduct}>
              <Link to="/">Add to shopcart</Link>
            </button>
          ) : null}
          <button>
            {" "}
            <Link to={`/products/${props.id}`}>More</Link>
          </button>
        </div>
      </Link>
    </div>
  );
}
