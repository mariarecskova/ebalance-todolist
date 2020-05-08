import React, { createContext, useReducer } from 'react';
import { reducer } from "../Reducer/todo.reducer";

const defaultTodos = [
    { id: '0', task: 'Learn Typescript', done: false },
    { id: '1', task: 'Do yoga', done: true },
    { id: '2', task: 'Go jogging', done: false }
];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, defaultTodos);
    return (

        <TodoContext.Provider value={todos}>{children}
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </TodoContext.Provider>
    );
};