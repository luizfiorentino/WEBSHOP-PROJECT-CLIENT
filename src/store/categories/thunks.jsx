import { startLoading, fetchAllCategories } from "./slice";
import axios from "axios";

export const allCategoriesThunk = async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const categoryData = await axios.get("http://localhost:4000/categories");
    //console.log("cat list thunk", categoryData);
    const response = categoryData.data;

    dispatch(fetchAllCategories(response));
  } catch (e) {
    console.log(e.message);
  }
};
