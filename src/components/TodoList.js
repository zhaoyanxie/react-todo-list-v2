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
              onClick={() => this.handleClick(i)}
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
    const newTodo = {
      name: this.state.value,
      isCompleted: false
    };
    if (this.state.value !== "") {
      this.setState({
        todos: [...this.state.todos,newTodo]
      });
      this.setState({ value: "" });
    }
    event.preventDefault();
  }

  handleClick(i) {
    let completedTask = this.state.todos[i];
    completedTask.isCompleted = completedTask.isCompleted === true? false : true;
    
    this.setState({
      todos: [
        ...this.state.todos.slice(0, i),
        completedTask,
        ...this.state.todos.slice(i + 1)
      ]
    });
    // event.preventDefault();
    // event.target.classList.toggle("todo-completed");
  }
}

export default TodoList;
