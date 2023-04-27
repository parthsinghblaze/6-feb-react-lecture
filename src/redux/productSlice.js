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

export const createProduct = createAsyncThunk('product/createProduct', async ({values, navigate}, { dispatch }) => {
    try {
        dispatch(addProductStart())
        const response = await axios.post(`http://localhost:8000/product`, values)
        const data = await response
        console.log('data', data);
        dispatch(addProductStop())
        navigate('/all-products')
    } catch (e) {
        alert(e.response.data.message)
        dispatch(addProductStop())
    }
})

export const editProduct = createAsyncThunk('product/editProduct', async ({id, formValue, navigate} , { dispatch }) => {
    try {
        dispatch(addProductStart())
        const response = await axios.patch(`http://localhost:8000/product/${id}`, formValue )
        const data = await response
        if(data.status === 200) {
            dispatch(addProductStop())
            navigate('/all-products')
        }
    } catch (e) {
        alert(e.response.data.message)
        dispatch(addProductStop())
    }
})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id, {dispatch}) => {
    try {
        const response = await axios.delete(`http://localhost:8000/product/${id}`)
        const data = await response

        if(data.status === 200) {
            dispatch(getAllProducts())
        }

    } catch (e) {
        console.log('e', e);
    }
} )

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
        loading: true,
        addProductLoading: false
    },
    reducers: {
        addProductStart: (state, action) => {
            state.addProductLoading = true 
        },
        addProductStop: (state, action) => {
            state.addProductLoading = false
        }
    },
    extraReducers: {
        [getAllProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.productList = action.payload;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.loading = false;
            state.productList = [];
        }
    }
 })

 export const { addProductStart, addProductStop } = productSlice.actions

 export default productSlice.reducer