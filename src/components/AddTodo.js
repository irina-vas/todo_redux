import React, { useState } from 'react';
import './AddTodo.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions';


const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.cards)

  return (
    <div>
      <div className="todo_new"></div>
      <div className="input_wrapper">
      <input
        className="input_todo"
        type = "text"
        placeholder="add a task..."
        value={value}
        onChange={(e) => setValue((e.target.value))}
      />
      <button 
        className="button_todo"
        onClick={() => {
          dispatch(                        
          addTodo(
            {
              id: new Date().getTime(),
              title: value,
              completed: 'added'
            })
          );
        setValue('')

        }}
      >save</button>
      </div>
    </div>
  );
};

export default AddTodo;