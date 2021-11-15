import {ADD_TODO, DELETE_TODO, CHANGE_COMPLETED} from "./constants";
// import todos from './state'

export let todos =   [
  {
  id: 1,
  title: 'first message',
  completed: 'added'
  },
  {
  id: 2,
  title: 'second message',
  completed: 'added'
  },
  {
    id: 3,
    title: 'third message',
    completed: 'added'
  },
]


export const reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {

    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter(item => item.id !== action.payload);
      return newTodos;
      };
    // case CHANGE_COMPLETED:
    //   return {

    //   };
      return state;
  }
  
