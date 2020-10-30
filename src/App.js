import React, { Component } from "react";
import "./App.css";
import ToDoList from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}
