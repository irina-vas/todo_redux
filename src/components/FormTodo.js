import React from 'react';
import Button from './Button';
import AddTodo from './AddTodo';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';
import { changeCompleted } from './../actions';



function FormTodo({ addTodo, handleAddTodo }) {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.cards);
  console.log(todos);

  let todoAdded = [...todos].filter(item => item.completed === 'added');
  let todoInProgress = [...todos].filter(item => item.completed === 'in progress');
  let todoDone = [...todos].filter(item => item.completed === 'done');


  return (
    <div className="wrapper">
      <div className="todos_nonSelected">
        <h2>Added tasks</h2>
        {todoAdded.map(item => {
            return (
              <div className="todo_item_wrapper" key={item.id}>
                <div className="todo_item">{item.title}</div>
                <div>
                  <select className="select_todo"
                    value={'added'}
                    onChange={(e) => {
                      const { value } = e.target;
                      console.log(value);
                      dispatch(changeCompleted({ value, todoId: item.id}))}
                    }
                  >
                    <option>select</option>
                    <option>in progress</option>
                    <option>done</option>
                  </select>
                  <button
                    className="todo_delete"
                    onClick={() => dispatch(deleteTodo(item.id))}
                  >
                    <span>DELETE</span>
                  </button>
                </div>
              </div>
            )
          })}
        {addTodo ? <AddTodo /> : <Button handleAddTodo={handleAddTodo} />}
      </div>
      <div className="todos_inProgress">
        <h2>Tasks in progress</h2>
        {todoInProgress.map(item => {
          return (
            <div className="todo_item_wrapper" key={item.id}>
              <div className="todo_item">{item.title}</div>
              <div>
                <select className="select_todo"
                  value={'added'}
                  onChange={(e) => {
                    const { value } = e.target;
                    console.log(value);
                    dispatch(changeCompleted({ value, todoId: item.id}))}
                  }
                >
                  <option>select</option>
                  <option value="in progress">in progress</option>
                  <option value="done">done</option>
                </select>
                <button
                  className="todo_delete"
                  onClick={() => dispatch(deleteTodo(item.id))}
                >
                  <span>DELETE</span>
                </button>
              </div>

            </div>
          )
        })}
      </div>
      <div className="todos_done">
          <h2>Tasks done</h2>
          {todoDone.map(item => {
            return (
              <div className="todo_item_wrapper" key={item.id}>
                <div className="todo_item">{item.title}</div>
                <div>
                  <select className="select_todo"
                    value={'added'}
                    onChange={(e) => {
                      const { value } = e.target;
                      console.log(value);
                      dispatch(changeCompleted({ value, todoId: item.id}))}
                    }
                  >
                    <option>select</option>
                    <option>in progress</option>
                    <option>done</option>
                  </select>
                  <button
                    className="todo_delete"
                    onClick={() => dispatch(deleteTodo(item.id))}
                  >
                    <span>DELETE</span>
                  </button>
                </div>

              </div>
            )
          })}
        </div>

    </div>
  );
}

export default FormTodo;