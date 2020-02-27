import React from "react";

export const initialState = {
    
  tasks: [
    {
      task: "Welcome to S*** to do V.2",
      id: 1,
      completed: false
    }
  ]
};

// cases for switch: ADD_TASK, CLEAR_TASK,
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

      case "CLEAR_TASKS" :

      return {...state ,tasks: state.tasks.filter(task => !task.completed)};

      case "CLEAR_ALL" :

      return initialState;

    default:
      return state;
  }
};
