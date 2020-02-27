import React , {useReducer} from "react";
import {initialState, todoReducer} from "./reducers/index";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [{tasks} ,dispatch] = useReducer(todoReducer,initialState);

  const addTask = task => {
    const newTask = {
      task:task,
      id:Date.now(),
      completed:false

    };
    dispatch({type:"ADD_TASK" , payload:newTask});
  };

  const clearTasks = () =>{
    dispatch({type:"CLEAR_TASKS"});
  }

  const clearAll = () =>{
    dispatch({type:"CLEAR_ALL"});
  }


  return <div className="App">
    
    <TodoList 
    tasks = {tasks}
    clearTasks = {clearTasks}
    clearAll = {clearAll}
    
    />
    <TodoForm
    addTask = {addTask}
    />
  </div>;
}

export default App;
