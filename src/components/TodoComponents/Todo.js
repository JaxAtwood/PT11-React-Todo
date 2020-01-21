import React from "react";

const Todo = props => {
  return (
    <div className={`item${props.item.completed ? " completed" : ""}`}
        onClick={e => props.toggleItem(props.item.id)}>
        <input 
            className="checker"
            type="checkbox"
            value={props.item.completed}
        />
        <p>{props.item.tasks}</p>
    </div>
  )
};

export default Todo;