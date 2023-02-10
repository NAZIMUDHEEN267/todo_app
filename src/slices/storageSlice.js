import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getValue, postValue } from "../storage/Async-storage";

const getItem = createAsyncThunk('todo/GET_DATA', getValue);
const postItem = createAsyncThunk('todo/SET_DATA', postValue);

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
                state.todos.length = 0;
                state.itemFound = true;
                // state.todos.push(action.payload)
            }
        })
        builder.addCase(postItem.fulfilled, (state, action) => {
            console.log(state.todos);
        })
    }
});

export default storageSlice.reducer;
export { getItem, postItem };