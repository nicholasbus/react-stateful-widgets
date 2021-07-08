import React, { useState } from 'react';

const items = ['Todo1', 'Todo2', 'Todo3', 'Todo4', 'Todo5']

export default function Todos() {
    const [todos, setTodos] = useState(items)
    const [staged, setStaged] = useState('')
    const removeItem = i => {
        const newTodos = todos.filter((_, index) => index !== i);
        setTodos(newTodos)
    }
    
    const changeStaged = e => {
        const { value } = e.target;
        setStaged(value)
    }

    const addTodo = value => {
        const newTodos = todos.map(todo => todo)
        newTodos.push(value)
        setTodos(newTodos)
    }

    const style = {
        fontSize: '1.5em',
        marginBottom: '0.3em',
        color: 'royalblue', 
    };

    return (
        
        <div className='widget-todos container' style={style}>
            {
                todos.map((todo, i) => 
                    <div key={todo}>
                        {todo} <button onClick={() => {removeItem(i)}}>Remove</button>
                    </div>
                )
            }
            <div className='container'>
                ADD TODO:
                <input id='todoInput' type='text' onChange={changeStaged}/>
                <button onClick={() => {addTodo(staged)}}>Add</button>
            </div>
        </div>
    );
}