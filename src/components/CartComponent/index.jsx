import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/shopcart/slice";

function CartComponent(props) {
  const dispatch = useDispatch();

  const allProducts = props.cartInfo;
  const title = props.title;
  console.log("TITLES::", title);

  const itemAmount = allProducts.filter(
    (product) => product.title === title
  ).length;

  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image} style={{ width: 90 }} />
      <h4>Total items: {itemAmount}</h4>
      <p>$ {parseFloat(props.price.toFixed(2))}</p>
      <button onClick={() => dispatch(removeItem(props.id))}>
        Remove item
      </button>
    </div>
  );
}

export { CartComponent };
