import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { homeSlice } from "./home";
import { ordersSlice } from "./orders/ordersSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        home: homeSlice.reducer,
        orders: ordersSlice.reducer
    }
})