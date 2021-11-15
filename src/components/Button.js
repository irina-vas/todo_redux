import React from 'react';
import './Button.css';

const Button = ({handleAddTodo}) => {

    return (
        <div className="button_add">
            <button onClick={handleAddTodo}>ADD TODO</button>
        </div>
    );
};

export default Button;