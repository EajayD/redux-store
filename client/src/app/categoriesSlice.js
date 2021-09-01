import {createSlice} from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    value: [],
  },
  reducers: {
    updateCategories: {
      reducer(state, action) {
        state.value = [...action.payload];
      },
      prepare(categories) {
        let categoriesList = categories ? categories : [];
        return {
          payload: categoriesList,
        };
      },
    },
    updateCurrentCategory: {
      reducer(state, action) {
        state.currentCategory = action.payload;
      },
      prepare(currentCategory) {
        return {
          payload: currentCategory,
        };
      },
    },
  },
});

export const { updateCategories, updateCurrentCategory} = categoriesSlice.actions

export const selectCurrentCategory = state => state.categories.currentCategory
export const selectCategories = state => state.categories.value

export default categoriesSlice.reducer