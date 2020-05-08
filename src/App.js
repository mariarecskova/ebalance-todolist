import React from 'react';
import './Styles/App.css';
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
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
