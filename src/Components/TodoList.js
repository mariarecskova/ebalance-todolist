import React, { useContext } from 'react';
import { TodoContext } from '../Context/Context';
import Todo from "./Todo";
import "../Styles/Todo.css"


function TodoList() {
    const todos = useContext(TodoContext);

    return (
        <div className="todo-container">
            <ul style={{ listStyle: "none", paddingInlineStart: 0, marginBlockStart: 0, marginBlockEnd: 0 }}>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;