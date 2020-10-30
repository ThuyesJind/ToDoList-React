import React, { Component } from "react";

export default (props) => (
  <div style={{ textDecoration: props.todo.complete ? "line-through" : "" }}>
    {props.todo.text}
    <button onClick={props.toggleComplete}>Complete</button>
    <button onClick={props.onDelete}>Delete</button>
  </div>
);
