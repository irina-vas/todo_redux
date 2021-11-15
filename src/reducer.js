import { ADD_TODO, DELETE_TODO, CHANGE_COMPLETED } from "./constants";
// import todos from './state'

export let todos = {
  cards: [
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
};


export const reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {

    case ADD_TODO:
      // newTodos = {}...state];
      // newTodos.push(action.payload);
      // return newTodos;

      return {
        ...state,
       cards: state.cards.push(action.payload)

        }
      

    case DELETE_TODO:
      // newTodos = [...state];
      // newTodos = newTodos.filter(item => item.id !== action.payload);
      // return newTodos;
      return {
        ...state,
        cards: state.cards.filter(item => item.id !== action.payload)
      }


    case CHANGE_COMPLETED:

    return {
      ...state,
      cards: state.cards.map(item => 
        item.id === action.payload.todoId
        ? { ...item, completed: action.payload.value } 
        : item)
    }

      // newTodos = [...state];
      // // title: action.payload,
      // newTodos = newTodos.map(item => item.id === action.payload.id ? { id: item.id, title: item.title, completed: action.payload } : item)
      // return newTodos;
    // newTodos = [...state];
    // //newTodos = newTodos.map(item => item.id === action.payload.id ? {id: item.id, title: item.title, completed: e.target.value} : item)
    // newTodos.title = action.event.target.value

    // return newTodos;
  };
  return state;
}

