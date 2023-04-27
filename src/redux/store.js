import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import menuSlice from "./menuSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        menu: menuSlice
    }
})