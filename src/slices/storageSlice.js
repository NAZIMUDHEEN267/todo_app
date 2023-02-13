import { createSlice, current } from "@reduxjs/toolkit";

const storageSlice = createSlice({
    name: "todo",
    initialState: {
        todos: {},
        itemFound: false
    },
    reducers: {
        SET_ITEM(state, action){
            const { obj, selectedDate } = action.payload;
            if(selectedDate in state.todos) {
                state.todos[selectedDate].push(obj);
            } else {
                state.todos[selectedDate] = [obj];
            }
        },
        UPDATE_ITEM(state, action){

        },
        DELETE_ITEM(state, action){
            state.todos = state.todos.map((todo) => {
                if(todo.id !== action.payload) {
                    return todo;
                }
            })
        },
        SET_ITEM_FOUND(state, action){
            state.itemFound = action.payload;
        }
    }
});

export default storageSlice.reducer;
export const { SET_ITEM, SET_ITEM_FOUND } = storageSlice.actions;