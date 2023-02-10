import { createSlice } from "@reduxjs/toolkit";

const storageSlice = createSlice({
    name: "checkUser",
    initialState: {
        isUserFirst: true
    },
    reducers: {
        CHECK_USER(state, action) {
            state.isUserFirst = action.payload;
        }
    }
});

export default storageSlice.reducer;
export const { CHECK_USER } = storageSlice.actions;