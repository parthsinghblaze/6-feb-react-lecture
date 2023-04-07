import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./numberSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        numberSlice: numberSlice,
        userSlice: userSlice
    }
})

export default store;