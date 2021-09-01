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

export default categoriesSlice.reducer