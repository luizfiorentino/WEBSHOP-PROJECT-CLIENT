export const selectCartItems = (state) => state.shopCart.listOfProducts;

export const selectTotalPurchaseAmount = (state) =>
  state.shopCart.totalPurchaseValue;
