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
import { BsCheckCircle } from "react-icons/bs";
function OrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [card, setCard] = useState("");
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
  const handleChange = (event) => {
    setCard(event.target.value);
    // const target = event.target;
    // const name = target.name;
    // const value = target.value;

    console.log("card selected:", card);
    // alert(`${name} ${value}`);
  };
  // userId, totalToPay, orderNumber
  // const newOrder = {
  //   userId: 1, //hardcoded for now
  //   totalToPay: totalAmount,
  //   orderNumber: Math.round(Math.random() * 10000000),
  // };
  //console.log(":::card->", card);
  return (
    <div>
      <h3>Order's summary:</h3>
      <h4>Number of items: {cartItems.length}</h4>
      <ul>
        {cartItems ? (
          cartItems.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <p>Loading..</p>
        )}
      </ul>
      <h4>Total: $ {totalAmount}</h4>
      <div className="main-form">
        {" "}
        <div className="order-form">
          <form onSubmit={handleSubmit}>
            {" "}
            <p>Select a card:</p>
            <div className="card-selection">
              <label className="card-item">
                <input
                  type="radio"
                  name="card"
                  value="Visa"
                  onChange={(e) => {
                    setCard(e.target.value);
                    //console.log("card selected", card);
                  }}
                />
                <img
                  src={`data:image/png;base64,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`}
                  height={60}
                />
              </label>{" "}
              <label card-item>
                <input
                  type="radio"
                  name="card"
                  value="MasterCard"
                  onChange={(e) => {
                    setCard(e.target.value);
                    //console.log("card selected", card);
                  }}
                />
                <img
                  src="data:image/png;base64,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"
                  height={60}
                />
              </label>
              <label card-item>
                <input
                  type="radio"
                  name="card"
                  value="AmericanExpress"
                  onChange={(e) => {
                    setCard(e.target.value);
                    //console.log("card selected", card);
                  }}
                />
                <img
                  src={`data:image/jpeg;base64,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`}
                  height={60}
                />
              </label>
            </div>
            <p>
              <strong>
                {card === "" ? (
                  <span className="no-card-selected-default">No card</span>
                ) : (
                  <BsCheckCircle />
                )}
              </strong>{" "}
              <strong>{card} </strong>selected
            </p>
            <div className="payment-and-address-fields">
              <label className="delivery-fields">
                Card Info
                <input
                  type="text"
                  value={cardInfo}
                  onChange={(e) => setCardInfo(e.target.value)}
                />
              </label>{" "}
              <label className="delivery-fields">
                Delivery Address
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>{" "}
              <label className="delivery-fields">
                Number/ Complement
                <input
                  type="text"
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                />
              </label>{" "}
              <label className="delivery-fields">
                City
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>{" "}
              <label className="delivery-fields">
                Country
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </label>{" "}
              <label className="delivery-fields">
                Zip Code
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </label>{" "}
              <label className="delivery-fields">
                Observation
                <input
                  type="text"
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                />
              </label>{" "}
              <p>
                <div className="submit-button">
                  {" "}
                  <button type="submit">Confirm and Submit</button>
                </div>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { OrderPage };
