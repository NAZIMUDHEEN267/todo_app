import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const love = createAsyncThunk('todo/GET_DATA', () => {
    return Promise((resolve, reject) => {
        setTimeout(() => resolve("hello"), 3000);
    })
})
const storageSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [{
            message: "something",
            start_time: 1,
            end_time: 2,
            day: false,
            color: "",
            reminder: true
        },
        {
            message: "something",
            start_time: 1,
            end_time: 2,
            day: false,
            color: "",
            reminder: true
        }]

    },
    extraReducers: (builder) => {
        builder.addCase(love.pending, () => {
            console.log("haiiiii");
        })
        builder.addCase(love.fulfilled, (_, action) => {
            console.log(action.payload);
        })
    }
});

export default storageSlice.reducer;
export const { GET_DATA, DELETE, SET_DATA, UPDATE } = storageSlice.actions;