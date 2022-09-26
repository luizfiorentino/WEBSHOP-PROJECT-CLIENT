import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="product-card-main">
      <h3>{props.title}</h3>
      <h4>Rating: {props.rating}</h4>
      <img src={props.image} style={{ width: 250 }} />
      <h4>$ {props.price}</h4>
      <button>
        <Link to={`/products/${props.id}`}>More</Link>
      </button>
    </div>
  );
}
