import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cardData: null,
        categoryData: null,
        cart: [],
    },
    reducers: {
        addCardData: ( state, action ) => {
            state.cardData = action.payload
        },

        addCategoryData: ( state, action ) => {
            state.categoryData = action.payload
        },

        addItem: (state, action) => {
            state.cart.push(action.payload)
        },

       removeItem: (state, action) => {
        state.cart.pop()
       },      

       clearCart: (state, action) => {
        state.cart = [];
       },  

    }
})


export const { addCardData, addCategoryData, addItem, removeItem, clearCart } = cardSlice.actions 
export default cardSlice.reducer