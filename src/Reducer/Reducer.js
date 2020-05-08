import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../Constant/Actions";
import { uuid } from 'uuidv4';

export function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                { id: uuid(), task: action.task, done: false }
            ];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}