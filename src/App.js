import React, { useState} from 'react';
import './App.css';

import FormTodo from './components/FormTodo';


function App() {
    // const [todo, setTodo] = useState([]);
    const [addTodo, setAddTodo] = useState(false);

    const handleAddTodo = () => {
        setAddTodo(true);
    }



    return (
        // <Context.Provider value={{handleAddTodo, addTodo, todo, setTodo}}>
        <div className="container_main">
            <FormTodo addTodo={addTodo}  handleAddTodo={handleAddTodo}/>
        </div>
        // {/* // </Context.Provider> */}

    );
}

export default App;