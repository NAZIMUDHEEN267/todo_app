import { createSlice } from "@reduxjs/toolkit";

const storageSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        itemFound: false,
        id: 0
    },
    reducers: {
        SET_ITEM(state, action){
            state.itemFound = true;
            state.todos.push(action.payload);
        },
        UPDATE_ITEM(state, action){

        },
        DELETE_ITEM(state, action){

        }
    }
});

export default storageSlice.reducer;
export const { SET_ITEM } = storageSlice.actions;