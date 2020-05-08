import React, { useContext } from 'react';
import { DispatchContext } from '../Context/Context';
import useInputState from "../Hooks/useInputState.js";
import { ADD_TODO } from '../Constant/Actions';
import "../Styles/TodoForm.css"

function TodoForm() {

    const dispatch = useContext(DispatchContext);
    const [value, handleChange, clearValue] = useInputState('');
    return (
        <form className="todo-form"
            onSubmit={event => {
                event.preventDefault();
                dispatch({ type: ADD_TODO, task: value });
                clearValue();
            }}>
            <input className="form-input"
                type="text"
                placeholder="What needs to be accomplished?"
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}

export default TodoForm;