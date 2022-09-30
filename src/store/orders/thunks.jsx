import { startLoading, fetchOrders, placeOrder, placeOrderItem } from "./slice";
import axios from "axios";

export const allOrdersThunk = async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const ordersList = await axios.get("http://localhost:4000/orders");
    const response = ordersList.data;
    console.log("thunk response::", response);

    dispatch(fetchOrders(response));
  } catch (e) {
    console.log(e.message);
  }
};

export function postNewOrder(orderNumber, userId, totalToPay, paid) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const postOrder = await axios.post("http://localhost:4000/orders", {
        orderNumber: orderNumber,
        userId: userId,
        totalToPay: totalToPay,
        paid: paid,
      });
      const response = postOrder.data;
      console.log("order post thunk::", response);
      dispatch(placeOrder(response));
    } catch (e) {
      console.log(e.message);
    }
  };
}
