import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    initialState: {
        light: false
    },
    reducers: {
        lightTheme(state, action){
            state.light = true;
        },
        darkTheme(state, action){
            state.light = false;
        }
    }
});

export default themeSlice.reducer;
export const { lightTheme, darkTheme } = themeSlice.actions;