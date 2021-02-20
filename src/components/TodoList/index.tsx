import React from "react";
import { useQuery } from "react-query";
import { fetchTodoList } from "src/api";
import { ITodoItem } from "src/type";
import TodoItem from "../TodoItem";

interface ITodoListProps {}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { data } = useQuery<ITodoItem[]>("todolist", fetchTodoList);
  return (
    <ul>
      {data?.map((item, idx) => {
        return <TodoItem {...item} key={idx.toString()} />;
      })}
    </ul>
  );
};

export default TodoList;
