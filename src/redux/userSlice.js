import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: "Rahul",
        lastName: "Singh"
    },
    reducers: {
        changeFirstName: (state) => {
            state.firstName = "XYZ"
            state.lastName = "ABC"
        }
    }
})

export const { changeFirstName } = userSlice.actions

export default userSlice.reducer

