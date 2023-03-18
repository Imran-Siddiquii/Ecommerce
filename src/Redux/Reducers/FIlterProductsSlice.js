import { createSlice } from "@reduxjs/toolkit";

const FilterProdutsSlice = createSlice({
  name: "filterProducts",
  initialState: {
    filter_products: [],
    all_products: [],
    grid_view: true,
    searchFilter: {
      text: "",
      category: "All",
      color: "All",
    },
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
      //sorting funciton
      const sortingArray = (a, b) =>
        action.payload.value === "lowest"
          ? a.price - b.price
          : action.payload.value === "highest"
          ? b.price - a.price
          : action.payload.value === "a-z"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      if (action.payload.value === "default") {
        state.filter_products = state.all_products;
      } else {
        state.filter_products = action.payload.filter_products
          .slice()
          .sort(sortingArray);
      }
      // if (action.payload.value === "lowest") {
      //   const filter = action.payload.filter_products
      //     .slice()
      //     .sort((a, b) => a.price - b.price);

      //   state.filter_products = filter;
      // } else if (action.payload.value === "highest") {
      //   const filter = action.payload.filter_products
      //     .slice()
      //     .sort((a, b) => b.price - a.price);
      //   state.filter_products = filter;
      // } else if (action.payload.value === "a-z") {
      //   const filter = action.payload.filter_products
      //     .slice()
      //     .sort((a, b) => a.name.localeCompare(b.name));
      //   state.filter_products = filter;
      // } else if (action.payload.value === "z-a") {
      //   const filter = action.payload.filter_products
      //     .slice()
      //     .sort((a, b) => b.name.localeCompare(a.name));
      //   state.filter_products = filter;
      // } else {
      //   state.filter_products = state.all_products;
      // }
    },
    //for text search
    search_filter: (state, action) => {
      state.searchFilter.text = action.payload;
      let filterProductsArray = [...state.all_products];
      const { name } = action.payload.target;
      const { value } = action.payload.target;
      console.log(
        name,
        value,
        action.payload,
        "for checking payload",
        action.payload.name,
        "name",
        action.payload.value,
        "payload"
      );
      const { text } = state.searchFilter;
      if (text) {
        filterProductsArray = filterProductsArray.filter((curElem) =>
          curElem?.name.toLowerCase().includes(text)
        );
      }
      if (value === "category") {
        console.log("hello");
      }
      state.filter_products = filterProductsArray;
    },

    // for category search
    search_filter_category: (state, action) => {
      state.searchFilter.category = action.payload;
      let filterProductsArray = [...state.filter_products];
      if (action.payload !== "All") {
        filterProductsArray = filterProductsArray.filter((curElem) =>
          curElem?.category.toLowerCase().includes(action.payload)
        );
      }
      state.filter_products = filterProductsArray;
    },
    // for company name sreach
    search_filter_company: (state, action) => {
      let filterProductsArray = [...state.all_products];
      if (action.payload !== "All") {
        filterProductsArray = filterProductsArray.filter((curElem) =>
          curElem?.company.toLowerCase().includes(action.payload)
        );
      }
      state.filter_products = filterProductsArray;
    },
    // for color search
    search_filter_color: (state, action) => {
      state.searchFilter.color = action.payload;

      let filterProductsArray = [...state.all_products];
      if (action.payload !== "All") {
        filterProductsArray = filterProductsArray.filter((curElem) =>
          curElem?.colors.includes(action.payload)
        );
      }
      state.filter_products = filterProductsArray;
    },
  },
});
export const {
  filterProducts,
  Grid_View,
  List_View,
  sorting,
  search_filter,
  search_filter_category,
  search_filter_company,
  search_filter_color,
} = FilterProdutsSlice.actions;
export default FilterProdutsSlice.reducer;

// // make a copy of array
// } else if (action.payload.name === "category") {
//   console.log(action.payload.value);
//   state.searchFilter.category = action.payload.value;
//   if (action.payload.value === "All") {
//     console.log("indise all ");
//   } else {
//     filterProductsArray = filterProductsArray.filter((curElem) =>
//       curElem?.category.toLowerCase().includes(category)
//     );
//     console.log(filterProductsArray, "check");
//   }
// } else {
//   state.searchFilter.category = action.payload.color;
//   filterProductsArray = filterProductsArray.filter((curElem) =>
//     curElem?.colors.toLowerCase().includes(color)
//   );
// }
