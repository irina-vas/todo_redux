import { ADD_TODO, DELETE_TODO, CHANGE_COMPLETED } from "./constants";

export let todos = {
  cards: []
};

export const reducer = (state = todos, action) => {
  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: action.id,
            title: action.title,
            completed: action.completed
          }
        ]
      }

    case DELETE_TODO:
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

    default:
      return state;
  };
}

