import React, { useContext } from 'react';
import { TodoContext } from '../Context/Context';
import Todo from "./Todo";


function TodoList() {
    const todos = useContext(TodoContext);

    return (
        <ul style={{ paddingLeft: 10, width: '95%' }}>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    );
}

export default TodoList;