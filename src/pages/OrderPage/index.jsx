import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPurchaseAmount,
} from "../../store/shopcart/selectors";
import { postNewOrder } from "../../store/orders/thunks";
import { resetShopcart } from "../../store/shopcart/slice";

function OrderPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalPurchaseAmount);
  console.log("total AMOUNT::", totalAmount);

  // userId, totalToPay, orderNumber
  const newOrder = {
    userId: 1, //hardcoded for now
    totalToPay: totalAmount,
    orderNumber: Math.round(Math.random() * 10000000),
  };

  return (
    <div>
      <h3>Please confirm your order's details</h3>
      <h4>Number of items: {cartItems.length}</h4>
      <ul>
        {cartItems ? (
          cartItems.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <p>Loading..</p>
        )}
      </ul>
      <h4>Total: $ {totalAmount}</h4>
      <div>
        <button
          onClick={() => {
            dispatch(postNewOrder(newOrder));
            dispatch(resetShopcart());
          }}
        >
          Confirm - Go to payment
        </button>
      </div>
    </div>
  );
}

export { OrderPage };
