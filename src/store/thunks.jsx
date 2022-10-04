import {
  startLoading,
  fetchAllProducts,
  fetchProductDetails,
} from "./products/slice";
import axios from "axios";

export const allProductsThunk = async (dispatch, getState) => {
  try {
    dispatch(startLoading());

    const productList = await axios.get(`http://localhost:4000/products`);

    // console.log("prod list thunk", productList);
    const response = productList.data;
    console.log("prod thunk response", response);

    dispatch(fetchAllProducts(response));
  } catch (e) {
    console.log(e.message);
  }
};

export function productDetailsThunk(productId) {
  async function fetchDetails(dispatch, getState) {
    try {
      dispatch(startLoading());

      const productDetails = await axios.get(
        `http://localhost:4000/products/${productId}`
      );
      const response = productDetails.data;
      dispatch(fetchProductDetails(response));
    } catch (e) {
      console.log(e.message);
    }
  }
  return fetchDetails;
}
