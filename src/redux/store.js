import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import menuSlice from "./menuSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        menu: menuSlice,
        login: loginSlice
    }
})