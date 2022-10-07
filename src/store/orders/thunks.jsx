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

export function postNewOrder(newOrder) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const postOrder = await axios.post("http://localhost:4000/orders", {
        userId: newOrder.userId,
        totalToPay: newOrder.totalToPay,
        orderNumber: newOrder.orderNumber,
        deliveryAddress: newOrder.deliveryAddress,
      });
      const response = postOrder.data;
      console.log("order post thunk::", response);
      dispatch(placeOrder(response));
    } catch (e) {
      console.log(e.message);
    }
  };
}
