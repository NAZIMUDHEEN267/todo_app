import store from "store";


export default function idCreator(date) {
    
    // get all todos from redux store
    const items = store.getState().db.todos;
    
    for (const key in items) {
        if (key === date && items[key].length > 0) {
            const todoList = items[key];
            const previousTodo = todoList[todoList.length - 1];
            const previousId = previousTodo.id.split("_");

            // create a new id by selecting previous todo
            return `${date}_${Number(previousId[1]) + 1}`
        }
    }
    // if no todo created then fresh id return
    return `${date}_0`
}
