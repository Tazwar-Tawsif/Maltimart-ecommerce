import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    cartIems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const exisitingItem = state.cartIems.find(
                item => item.id === newItem.id
            );

            state.totalQuantity++

            if (!exisitingItem) {
                state.cartIems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }

            else {
                exisitingItem.quantity++
                exisitingItem.totalPrice = Number(exisitingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartIems.reduce((total, item) => total + Number(item.price) * Number(item.quantity))

            console.log(state.totalQuantity);
            console.log(state.cartIems);
            console.log(newItem)
        }
    }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer