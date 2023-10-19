import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            //mutating the state here(modifying the existing state)
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // []
        }
    }//here we have multiple reducers
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

//but we are exporting only one big reducer which consists multiple reducers
export default cartSlice.reducer;