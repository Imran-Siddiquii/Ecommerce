import { configureStore } from "@reduxjs/toolkit";
import FIlterProductsSlice from "../Reducers/FilterProductsSlice";
import storeProducts from "../Reducers/Products";
import SingleProductSlice from "../Reducers/SingleProductSlice";
export const store = configureStore({
  reducer: {
    allProducts: storeProducts,
    singleProduct: SingleProductSlice,
    filter_products: FIlterProductsSlice,
  },
});
