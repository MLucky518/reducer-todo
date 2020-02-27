import React from "react";

export const initialState = {
  tasks: [
    {
      task: "Example Task",
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

    case "CLEAR_TASKS":
      return { ...state, tasks: state.tasks.filter(task => !task.completed) };

    case "CLEAR_ALL":
      return initialState;

    case "COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map(task =>   task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };

    default:
      return state;
  }
};
