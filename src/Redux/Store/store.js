import { configureStore } from "@reduxjs/toolkit";
import AddToCartSlice from "../Reducers/AddToCartSlice";
import FilterProductsSlice from "../Reducers/FilterProductsSlice";
import storeProducts from "../Reducers/Products";
import SingleProductSlice from "../Reducers/SingleProductSlice";
export const store = configureStore({
  reducer: {
    allProducts: storeProducts,
    singleProduct: SingleProductSlice,
    filter_products: FilterProductsSlice,
    CartItems: AddToCartSlice,
  },
});
