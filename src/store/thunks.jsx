import { startLoading, fetchAllProducts } from "./products/slice";
import axios from "axios";

export const allProductsThunk = async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const productList = await axios.get("http://localhost:4000/products");
    console.log("pord list thunk", productList);
    const response = productList.data;

    dispatch(fetchAllProducts(response));
  } catch (e) {
    console.log(e.message);
  }
};
