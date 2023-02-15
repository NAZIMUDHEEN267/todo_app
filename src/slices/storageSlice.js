import { createSlice, current } from "@reduxjs/toolkit";

const storageSlice = createSlice({
    name: "todo",
    initialState: {
        todos: {},
        itemFound: null
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
          for (const key in state.todos) {
            if(key === action.payload.date) {
               state.todos[key] = state.todos[key].filter(todo => { 
                if(todo.id !== action.payload.id) {
                    return todo;
                } 
            })
            }
          }
          console.log(state.todos);
        },
        SET_ITEM_FOUND(state, action){
            state.itemFound = action.payload;
        }
    }
});

export default storageSlice.reducer;
export const { SET_ITEM, SET_ITEM_FOUND, DELETE_ITEM } = storageSlice.actions;