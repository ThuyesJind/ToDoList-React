import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
    completeAll: true,
  };
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  delete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  toggleToShow = (toShow) => {
    this.setState({
      todoToShow: toShow,
    });
  };
  deleteCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };
  // completeAll = () => {
  //   this.setState({
  //     todos: this.state.todos.map((todo) => {
  //       return {
  //         id: todo.id,
  //         text: todo.text,
  //         complete: true,
  //       };
  //     }),
  //   });
  // };

  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "completed") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
            onDelete={() => this.delete(todo.id)}
            deleteCompleted={() => this.deleteCompleted()}
          />
        ))}
        <div>
          Active todos:{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
          <button onClick={() => this.toggleToShow("all")}> All</button>
          <button onClick={() => this.toggleToShow("active")}> Active</button>
          <button onClick={() => this.toggleToShow("completed")}>
            {" "}
            Completed
          </button>
          {this.state.todos.some((todo) => todo.complete) ? (
            <div>
              <button onClick={this.deleteCompleted}>Delete completed</button>
            </div>
          ) : null}
          <div>
            <button onClick={() => this.setState({
              todos: this.state.todos.map(todo =>({
                ...todo,
                complete: this.state.
              }))
            })}>
              Complete All:  { "${this.state.completeAll}" }
            </button>
            .
          </div>
        </div>
      </div>
    );
  }
}
