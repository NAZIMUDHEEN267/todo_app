import { createSlice } from "@reduxjs/toolkit";

const storageSlice = createSlice({
    name: "checkUser",
    initialState: {
        isUserFist: true
    },
    reducers: {
        CHECK_USER(state, action) {
            state.isUserFist = action.payload;
        }
    }
});

export default storageSlice.reducer;
export const { CHECK_USER } = storageSlice.actions;