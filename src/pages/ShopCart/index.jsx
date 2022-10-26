import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/shopcart/selectors";
import { useDispatch } from "react-redux";
import { removeItem, setTotalValue } from "../../store/shopcart/slice";
import { CartComponent } from "../../components";
import { Link } from "react-router-dom";
import { ShopPage } from "../OrderPage";
import "./styles.css";

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
    <div className="shopcart-page-main-container">
      <div className="shopcart-items-inner">
        <div className="thumbnail-cards">
          <ul className="thumbnails-inner">
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
        </div>
        <div className="price-and-button">
          <div className="main-inner">
            {cartInfo.length === 0 ? (
              <p className="purchase-summary">
                Your shopcart is currently empty
              </p>
            ) : (
              <p className="purchase-summary">
                Total: ${" "}
                <span className="total-price">
                  {parseFloat(sumPrices.toFixed(2))}
                </span>
              </p>
            )}

            {cartInfo.length === 0 ? undefined : (
              <p>
                <button className="order-button">
                  <Link to="/order">Continue</Link>
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="footer-sp">
        <div className="footer-text">
          <p className="costumer-call">
            We're happy to help or get any suggestion from you! Please send an
            email to our costumer's center:{" "}
            <span className="costumer-center-email">
              contact@online-shop.com
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export { ShopCart };
