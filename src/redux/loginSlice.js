import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function getLocalStorageData() {
    let isLogin = localStorage.getItem('isLogin')

    if(isLogin) {
        return true 
    }

    return false

}

export const login = createAsyncThunk( 'login' , async ( {values, navigate} , { dispatch } ) => {
    try {
        dispatch(toggleLoading(true))
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3v3AfWY7sCWskGPNJpZ6tw0JOaKistIA`, values)
        const data = await response 

        if(data.status === 200) {
            dispatch(setLogin(true))
            navigate("/")
        }

        dispatch(toggleLoading(false))

    } catch (error) {
        alert(error.response.data.error.message)
        dispatch(toggleLoading(false))
    }
})

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: getLocalStorageData(),
        isLoading: false
    },
    reducers: {
        setLogin: (state, action) => {
            localStorage.setItem('isLogin', "true");
            state.isLogin = action.payload
        },
        setLogout: (state, action) => {
            localStorage.removeItem('isLogin')
            state.isLogin = false
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: {

    }
})

export const { setLogin, setLogout, toggleLoading } = loginSlice.actions

export default loginSlice.reducer
