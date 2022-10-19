import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/shopcart/selectors";
import { useDispatch } from "react-redux";
import { removeItem, setTotalValue } from "../../store/shopcart/slice";
import { CartComponent } from "../../components";
import { Link } from "react-router-dom";
import { ShopPage } from "../OrderPage";

function ShopCart() {
  const dispatch = useDispatch();
  const cartInfo = useSelector(selectCartItems);
  console.log("cartInfo::", cartInfo);
  const pricesArray = cartInfo.map((item) => item.price);
  const sumPrices =
    pricesArray.length !== 0 ? pricesArray.reduce((a, b) => a + b) : 0;

  const valueArray = cartInfo.map(function (item) {
    return item.title;
  });
  const deduplicatedShopcart = valueArray.some(function (item, idx) {
    return valueArray.indexOf(item) != idx;
  });

  console.log("DEDUPLICATE", deduplicatedShopcart);

  const arr = [
    { id: 1, name: "test1", msg: "hi1" },
    { id: 2, name: "test2", msg: "hi2" },
    { id: 2, name: "test3", msg: "hi3" },
    { id: 3, name: "test4", msg: "hi4" },
    { id: 4, name: "test5", msg: "hi5" },
    { id: 5, name: "test6", msg: "hi6" },
    { id: 5, name: "test7", msg: "hi7" },
    { id: 6, name: "test8", msg: "hi8" },
  ];

  // const filteredArr = arr.reduce((acc, current) => {
  //   const x = acc.find((item) => item.id === current.id);
  //   if (!x) {
  //     return [...acc, current];
  //   } else {
  //     return acc.map((x) =>
  //       x.id === current.id ? { ...x, msg: x.msg + current.msg } : x
  //     );
  //   }
  // }, []);

  const filteredArr = cartInfo.reduce((acc, current) => {
    const x = acc.find((item) => item.title === current.title);
    if (!x) {
      return [...acc, current];
    } else {
      return acc.map((x) =>
        x.title === current.title ? { ...x, price: x.price + current.price } : x
      );
    }
  }, []);

  console.log("FILTERED ARRAY", filteredArr);

  dispatch(setTotalValue(sumPrices));
  return (
    <div>
      <ul>
        {filteredArr ? (
          filteredArr.map((item) => {
            return (
              <CartComponent
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                cartInfo={cartInfo}
              />
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </ul>
      {cartInfo.length === 0 ? (
        <h3>Your shopcart is currently empty</h3>
      ) : (
        <h3>Total: $ {parseFloat(sumPrices.toFixed(2))}</h3>
      )}
      {cartInfo.length === 0 ? undefined : (
        <p>
          <button>
            <Link to="/order">Place an order</Link>
          </button>
        </p>
      )}
    </div>
  );
}

export { ShopCart };
