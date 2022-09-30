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

  dispatch(setTotalValue(sumPrices));
  return (
    <div>
      <ul>
        {cartInfo ? (
          cartInfo.map((item) => {
            return (
              <CartComponent
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </ul>
      <h3>Total: $ {sumPrices}</h3>

      <p>
        <button>
          <Link to="/order">Place an order</Link>
        </button>
      </p>
    </div>
  );
}

export { ShopCart };
