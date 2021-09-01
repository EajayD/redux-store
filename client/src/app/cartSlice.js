import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
        cartOpen: false
    },
    reducers: {
        addToCart: (state, action) => {
            state.value = [...state.value, action.product];
        },
        addMultipleToCart: (state, action) => {
            state.value = [...state.cart, ...action.products];
        },
        updateCartQuantity: (state, action) => {
            state.cartOpen = true;
            state.value = state.value.map(product => {
                if (action._id === product._id) {
                    product.purchaseQuantity = action.purchaseQuantity
                }
                return product
            })
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter(product => {
                return product._id !== action._id;
            });
            state.cartOpen = state.value.length > 0;
        },
        clearCart: (state) => {
            state.value = [];
            state.cartOpen = false;
        },
        toggleCart: (state, action) => {
            state.cartOpen = !state.cartOpen;
        }
    }
})

export const {addToCart, addMultipleToCart, updateCartQuantity, removeFromCart, clearCart, toggleCart} = cartSlice.actions;
export default cartSlice.reducer;