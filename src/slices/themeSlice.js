import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: {}
    },
    reducers: {
        DARK_THEME(state, action){
            state.theme = action.payload;
        },
        LIGHT_THEME(state, action){
            state.theme = action.payload;
        }
    }
});

export default themeSlice.reducer;
export const { DARK_THEME, LIGHT_THEME, CALLBACK } = themeSlice.actions;