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
        }
    }
});

export default storageSlice.reducer;
export const { SET_ITEM } = storageSlice.actions;