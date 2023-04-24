import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('product/getProducts', async () => {
    try {
        const response = await axios.get(`http://localhost:8000/product/products`)
        return response.data.data.products
    } catch (e) {
        console.log('e', e);
    }
    
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
        loading: true
    },
    reducers: {

    },
    extraReducers: {
        [getAllProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.productList = action.payload;
        }
    }
 })

 export default productSlice.reducer