import React, { useState} from 'react';
import './App.css';
import FormTodo from './components/FormTodo';

function App() {
  const [addTodo, setAddTodo] = useState(false);
  const handleAddTodo = () => {
    setAddTodo(true);
  }

  return (
    <div className="container_main">
      <FormTodo addTodo={addTodo}  handleAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;