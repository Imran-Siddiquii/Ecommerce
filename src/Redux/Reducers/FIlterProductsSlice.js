import { createReducer, createSlice } from "@reduxjs/toolkit";

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
  },
  Grid_View: (state, payload) => {
    state.grid_view = payload;
  },
});
export const { filterProducts, Grid_View } = FilterProdutsSlice.actions;
export default FilterProdutsSlice.reducer;
