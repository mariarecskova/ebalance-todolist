import React, { createContext, useReducer } from 'react';
import { reducer } from "../Reducer/Reducer";

const defaultTodos = [
    { id: '0', task: 'Learn Typescript', done: false },
    { id: '1', task: 'Do yoga', done: true },
    { id: '2', task: 'Go jogging', done: false }
];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
    const [todos, dispatch] = useReducer(reducer, defaultTodos);

    return (
        <TodoContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
        </TodoContext.Provider>
    );
};