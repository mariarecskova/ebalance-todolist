import React, { useContext, memo } from 'react';
import { DispatchContext } from '../Context/Context';
import { DELETE_TODO, TOGGLE_TODO } from '../Constant/Actions';

function Todo({ id, task, completed }) {
    const dispatch = useContext(DispatchContext);

    return (
        <li
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
            <div className={"todo-bin"}>
                <img
                    onClick={e => {
                        e.stopPropagation();
                        dispatch({ type: DELETE_TODO, id });
                    }}
                />
            </div>
        </li>
    );
}

export default memo(Todo);