import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthStore";
import cartSlice from "./CartStore";
import productsSlice from "./ProductsStore";

const reduxStore = configureStore({
    reducer:{auth:authSlice.reducer, products:productsSlice.reducer, cart:cartSlice.reducer}
});
export default reduxStore;