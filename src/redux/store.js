import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./numberSlice";
import userSlice from "./userSlice";
import apiSlice from "./api";

const store = configureStore({
    reducer: {
        numberSlice: numberSlice,
        userSlice: userSlice,
        api: apiSlice
    }
})

export default store;