import {createSlice} from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    updateProducts: {
      reducer(state, action) {
        state.value = [...action.payload];
      },
      prepare(products) {
        let productList = products ? products : [];
        return {
          payload: productList,
        };
      },
    },
  },
});

export const {updateProducts} = productsSlice.actions
export const selectProducts = state => state.products.value

export default productsSlice.reducer