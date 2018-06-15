import React, { Component } from "react";
import Title from './Title';
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <TodoList />
      </div>
    )
  }
}

export default App;
