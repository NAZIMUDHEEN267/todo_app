import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getValue } from "../storage/Async-storage";

const getItem = createAsyncThunk('todo/GET_DATA', getValue);

const storageSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        itemFound: false

    },
    extraReducers: (builder) => {
        builder.addCase(getItem.fulfilled, (state, action) => {
            if (!action.payload) {
                state.itemFound = false;
            } else {
                state.itemFound = true;
                state.todos = [...action.payload];
            }
        })
        builder.addCase(getItem.rejected, (state, action) => {
            console.log(action.error.message);
        })
    }
});

export default storageSlice.reducer;
export { getItem }