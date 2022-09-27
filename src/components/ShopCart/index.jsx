import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/shopcart/selectors";

export default function ShopCart() {
  const cartInfo = useSelector(selectCartItems);
  console.log("cartInfo::", cartInfo);
  const pricesArray = cartInfo.map((item) => item.price);
  const sumPrices = pricesArray.reduce((a, b) => a + b);

  return (
    <div>
      <h3>::Shopcart::</h3>
      {!cartInfo ? (
        <p>Loading...</p>
      ) : (
        cartInfo.map((item) => (
          <>
            <p key={item.id}>{item.title}</p>
            <p key={item.id}>$ {item.price}</p>
            <img src={item.image} style={{ width: 90 }} />
          </>
        ))
      )}
      <p>Total: $ {sumPrices}</p>
    </div>
  );
}

export { ShopCart };
