import React from "react";

const Todo = props => {
  return (
    <li 
      className={props.item.isCompleted ? "todo-completed" : ""}
      onClick={props.onClick}
    >
      {props.item.name}
    </li>
  );
};


export default Todo;
