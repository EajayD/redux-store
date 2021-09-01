import {createSlice} from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        value: []
    },
    reducers: {
        updateCategories: (state, action) => {
            state.value = [...action.categories];
        },
        updateCurrentCategory: (state, action) => {
            state.currentCategory = action.currentCategory;
        }
    }
})

export const { updateCategories, updateCurrentCategory} = categoriesSlice.actions

export const selectCurrentCategory = state => state.categories.currentCategory
export const selectCategories = state => state.categories.value

export default categoriesSlice.reducer