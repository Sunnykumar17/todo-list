import React from "react";

const TodoList = (props) => {
  return (
    <div className="toDo_style">
      <i
        className="fa fa-times"
        onClick={() => {
          props.onSelect(props.id);
        }}
        aria-hidden="true"
      ></i>
      <ol><li>{props.text}</li></ol>
    </div>
  );
};

export default TodoList;
