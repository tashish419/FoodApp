import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userDetails from "./userDetailsSlice";


const appStore = configureStore({
    reducer:{
        cart: cartReducer,
        user: userDetails,
    }
    /* this whole big 'reducer' is basically our app's reducer and it 
    consists different 'reducers' for diff slices*/
});

export default appStore;