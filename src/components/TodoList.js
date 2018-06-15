import React, { Component } from "react";
import { todos } from "../seedData";
import InputForm from "./InputForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      value: ""
    };
  }

  render() {
    return (
      <div>
        <InputForm
          handleChange={event => this.handleChange(event)}
          onSubmit={event => this.handleSubmit(event)}
          value={this.state.value}
        />
        <ul>
          {this.state.todos.map((eachObj, i) => (
            <Todo
              key={i}
              item={eachObj}
              onClick={event => this.handleClick(event)}
            />
          ))}
        </ul>
      </div>
    );
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    if (this.state.value !== "") {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            name: this.state.value,
            isCompleted: false
          }
        ]
      });
      this.setState({ value: "" });
    }
    event.preventDefault();
  }

  handleClick(event) {
    event.target.classList.toggle("todo-completed");
  }
}

export default TodoList;
