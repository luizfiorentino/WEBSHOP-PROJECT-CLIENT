import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPurchaseAmount,
} from "../../store/shopcart/selectors";
import { postNewOrder } from "../../store/orders/thunks";
import { resetShopcart } from "../../store/shopcart/slice";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function OrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [observation, setObservation] = useState("");
  const [cardInfo, setCardInfo] = useState("");

  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalPurchaseAmount);
  console.log("total AMOUNT::", totalAmount);

  // userId, totalToPay, orderNumber
  // const newOrder = {
  //   userId: 1, //hardcoded for now
  //   totalToPay: totalAmount,
  //   orderNumber: Math.round(Math.random() * 10000000),
  // };
  function handleSubmit(event) {
    event.preventDefault();
    //const deliveryAddress = `${address}, ${houseNumber} - ${city} - ${country} - zip code: ${zipCode} - observation: ${observation}`;
    //console.log("deliveryAddress", deliveryAddress);
    const newOrder = {
      userId: 1, //hardcoded for now
      totalToPay: totalAmount,
      orderNumber: Math.round(Math.random() * 10000000),
      deliveryAddress: `${address}, ${houseNumber} - ${city} - ${country} - zip code: ${zipCode} - observation: ${observation}`,
      cardInfo: cardInfo,
    };
    dispatch(postNewOrder(newOrder));
    console.log("::address", address);
    setCardInfo("");
    setAddress("");
    setHouseNumber("");
    setCity("");
    setCountry("");
    setZipCode("");
    setObservation("");
    navigate("/purchaseSucceeded");
  }

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
        <div>
          <h4>
            Fill in the delivery address and card details to conclude your
            purchase
          </h4>
          <div className="order-form">
            <form onSubmit={handleSubmit}>
              <label>
                Card Info
                <input
                  type="text"
                  value={cardInfo}
                  onChange={(e) => setCardInfo(e.target.value)}
                />
              </label>{" "}
              <label>
                Delivery Address:
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>{" "}
              <label>
                House Number and Complement
                <input
                  type="text"
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                />
              </label>{" "}
              <label>
                City
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>{" "}
              <label>
                Country
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </label>{" "}
              <label>
                Zip Code
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </label>{" "}
              <label>
                Observation
                <input
                  type="text"
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                />
              </label>{" "}
              <p>
                <button type="submit">Complete your order!</button>
              </p>
            </form>
          </div>
        </div>

        {/* <button
          onClick={() => {
            dispatch(postNewOrder(newOrder));
            dispatch(resetShopcart());
          }}
        >
          Confirm - Go to payment
        </button> */}
      </div>
    </div>
  );
}

export { OrderPage };
