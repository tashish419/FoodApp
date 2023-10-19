import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{
        cart: cartReducer
    }
    /* this whole big 'reducer' is basically our app's reducer and it 
    consists different 'reducers' for diff slices*/
});

export default appStore;