import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/shopcart/slice";
import "./styles.css";

function CartComponent(props) {
  const dispatch = useDispatch();

  const allProducts = props.cartInfo;
  const title = props.title;

  const itemAmount = allProducts.filter(
    (product) => product.title === title
  ).length;

  return (
    <div className="main-container-cart-component">
      <div className="product-inner">
        <p className="title">{props.title}</p>
        <img className="img-thumbnail" src={props.image} />
        <p className="total-items">Total items: {itemAmount}</p>
        <p>$ {parseFloat(props.price.toFixed(2))}</p>
        <button onClick={() => dispatch(removeItem(props.id))}>
          Remove item
        </button>
      </div>
    </div>
  );
}

export { CartComponent };
