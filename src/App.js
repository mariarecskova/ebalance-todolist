import React, { useContext } from 'react';
import './Styles/App.css';
import { TodoProvider, DispatchContext } from "./Context/Context";
import TodoForm from "./Components/TodoForm.js";
import TodoList from "./Components/TodoList";
import { DELETE_ALL } from "./Constant/Actions"

function App() {
  const dispatch = useContext(DispatchContext);
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
        <div className="bottom-bin">
          <button className="todo-bin" />
          {/* onClick={event => {
              event.stopPropagation();
              dispatch({ type: DELETE_ALL }) this part was not working, I could figure it out- error: dispatch is not a function
            }
            }  */}
          <h3>CLEAR ALL</h3>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
