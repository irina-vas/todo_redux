import { ADD_TODO, DELETE_TODO, CHANGE_COMPLETED } from "./constants";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    id: new Date().getTime(),
    title: data.title,
    completed: 'added',
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  }
}

export const changeCompleted = (data) => {
  return {
    type: CHANGE_COMPLETED,
    payload: data
  }
}