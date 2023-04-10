import { createSlice } from "@reduxjs/toolkit";

// const [number, setNumber] = useState(0)

export const numberSlice = createSlice({
    name: 'counter',
    initialState: {
        number: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log('action', action)
            state.number = state.number + Number(action.payload)
        },
        decrement: (state, action) => {
            console.log('action', action)
            if(state.number > 0) {
                state.number = state.number - Number(action.payload)
            }
        }
    }
})

// when we create the function in the reducers it store it into an actions 

export const { increment, decrement } = numberSlice.actions

export default numberSlice.reducer

