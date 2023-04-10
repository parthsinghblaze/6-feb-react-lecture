import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: "Rahul",
        lastName: "Singh"
    },
    reducers: {
        changeFirstName: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        }
    }
})

export const { changeFirstName } = userSlice.actions

export default userSlice.reducer

