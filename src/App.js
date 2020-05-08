import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoProvider } from "./Context/Context";
import TodoForm from "./Components/TodoForm.js";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <div className="App-header">
          REACT TO-DO
      </div>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
