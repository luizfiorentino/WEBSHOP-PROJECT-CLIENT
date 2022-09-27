import React from "react";
import "./styles.css";
import { addItem } from "../../store/shopcart/slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  const addProduct = () => {
    console.log("addProduct", props.id);
    const itemObject = {
      title: props.title,
      price: props.title,
      image: props.image,
    };

    dispatch(addItem(itemObject));
  };

  return (
    <div className="product-card-main">
      <h3>{props.title}</h3>
      <h4>Rating: {props.rating}</h4>
      <img src={props.image} style={{ width: 250 }} />
      <h4>$ {props.price}</h4>
      <button onClick={addProduct}>Add to shopcart</button>
      <button>
        <Link to={`/products/${props.id}`}>More</Link>
      </button>
    </div>
  );
}
