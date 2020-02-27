import React, { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/index";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [{ tasks }, dispatch] = useReducer(todoReducer, initialState);

  const addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const clearTasks = () => {
    dispatch({ type: "CLEAR_TASKS" });
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const toggleCompleted = id => {
    dispatch({ type: "COMPLETED", payload: id });
  };

  return (
    <div>
      <div className="App">
        <h1 className="list-header">S*** to do V.2</h1>
        <TodoList tasks={tasks} toggle={toggleCompleted} />
      </div>
      <div className = "form-container">
        <div className = "form-content">
        <TodoForm
          addTask={addTask}
          clearTasks={clearTasks}
          clearAll={clearAll}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
