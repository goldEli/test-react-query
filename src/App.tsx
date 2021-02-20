import React from "react";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";


export default function App() {
  return (
    <div className="App">
      <AddTodoItem />
      <TodoList />
    </div>
  );
}


