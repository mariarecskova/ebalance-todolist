import React, { useContext, memo } from 'react';
import { DispatchContext } from '../Context/Context';
import { DELETE_TODO, TOGGLE_TODO } from '../Constant/Actions';
import "../Styles/Todo.css"

function Todo({ id, task, completed }) {
    const dispatch = useContext(DispatchContext);

    return (
        <li className="todo-item"
            onClick={() => dispatch({ type: TOGGLE_TODO, id })}
        >

            <span
                style={{
                    textDecoration: completed ? 'line-through' : '',
                    color: completed ? '#3CB371' : '#141414'

                }}
            >
                {task}
            </span>
            <button className="todo-bin"
                onClick={event => {
                    event.stopPropagation();
                    dispatch({ type: DELETE_TODO, id });
                }}
            >
            </button>

        </li>
    );
}

export default memo(Todo);