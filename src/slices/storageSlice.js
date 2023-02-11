import { createSlice, current } from "@reduxjs/toolkit";

const storageSlice = createSlice({
    name: "todo",
    initialState: {
        todos: {},
        itemFound: false
    },
    reducers: {
        SET_ITEM(state, action){
            const { obj, currentDate } = action.payload;
            if(currentDate in state.todos) {
                state.todos[currentDate].push(obj);
            } else {
                state.todos.yes = [obj];
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