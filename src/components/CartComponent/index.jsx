import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/shopcart/slice";

function CartComponent(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image} style={{ width: 90 }} />
      <p>$ {props.price}</p>
      <button onClick={() => dispatch(removeItem(props.id))}>
        Remove item
      </button>
    </div>
  );
}

export { CartComponent };
