import {createSlice} from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: []
    },
    reducers: {
        updateProducts: (state, action) => {
            state.value = [...action.products];
        }
    }
})

export const {updateProducts} = productsSlice.actions
export const selectProducts = state => state.products.value

export default productsSlice.reducer