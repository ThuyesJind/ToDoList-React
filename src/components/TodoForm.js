import React, { Component } from "react";
import shortid from "shortid";

export default class TodoForm extends Component {
  state = {
    text: "",
  };
  handleImputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleImputChange}
          placeholder="todo..."
        ></input>
        <div>
          <button onClick={this.handleSubmit}>Add</button>
        </div>
      </form>
    );
  }
}
