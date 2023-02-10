import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    reducers: {
        GET_DATA(state, action) {
            console.log(state.todos);
        },
        SET_DATA(state, action) {

        },
        UPDATE(state, action) {

        },
        DELETE(state, action) {

        }
    }
});

export default storageSlice.reducer;
export const { GET_DATA, DELETE, SET_DATA, UPDATE } = storageSlice.actions;