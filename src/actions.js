import {ADD_TODO, DELETE_TODO, CHANGE_COMPLETED} from "./constants";


export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  }

}
export const changeCompleted = (completed) => {
  return {
    type: CHANGE_COMPLETED,
    payload: completed,
  }
}