import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(`api/getProduct`, async () => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`)
        const data = await response.json()
        return data 
    } catch (error) {
        console.log('error', error)
    }
})

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        isLoading: true,
        products: []
    }, 
    reducers: {

    },
    extraReducers: {
        [getProduct.pending] : (state, action) => {
            state.isLoading = true
        },
        [getProduct.fulfilled]: (state, action) => {
            state.isLoading = false 
            state.products = action.payload
        },
        [getProduct.rejected]: (state, action) => {
            state.isLoading = false 
        }
    }
})

export default apiSlice.reducer

