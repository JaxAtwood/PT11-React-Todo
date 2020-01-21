import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
             {props.tasks.map((item, index) => {
        return (
                <Todo item={item} key={index} toggleItem={props.toggleItem} />
        );
      })}
        </div>
    )
}

export default TodoList;