import { createSlice } from "@reduxjs/toolkit";

const FilterProdutsSlice = createSlice({
  name: "filterProducts",
  initialState: {
    filter_products: [],
    all_products: [],
    grid_view: false,
  },
  reducers: {
    filterProducts: (state, { payload }) => ({
      ...state,
      filter_products: payload,
      all_products: payload,
    }),
    Grid_View: (state, payload) => {
      state.grid_view = payload;
    },
    List_View: (state, { payload }) => {
      state.grid_view = false;
    },
    sorting: (state, action) => {
      //sorting array
      if (action.payload.value === "lowest") {
        const filter = action.payload.filter_products
          .slice()
          .sort((a, b) => a.price - b.price);

        state.filter_products = filter;
        console.log(filter, "lowest");
      } else if (action.payload.value === "highest") {
        const filter = action.payload.filter_products
          .slice()
          .sort((a, b) => b.price - a.price);
        console.log(filter, "highest");
        state.filter_products = filter;
      } else if (action.payload.value === "a-z") {
        const filter = action.payload.filter_products
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
        state.filter_products = filter;
      } else if (action.payload.value === "z-a") {
        const filter = action.payload.filter_products
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
        state.filter_products = filter;
      } else {
        state.filter_products = state.all_products;
      }
    },
  },
});
export const { filterProducts, Grid_View, List_View, sorting } =
  FilterProdutsSlice.actions;
export default FilterProdutsSlice.reducer;
