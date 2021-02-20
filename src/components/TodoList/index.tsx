import React from "react";
import { useQuery } from "react-query";
import { fetchTodoList, TODO_LIST } from "src/api";
import { ITodoItem } from "src/type";
import TodoItem from "../TodoItem";

interface ITodoListProps {}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { data } = useQuery<ITodoItem[]>(TODO_LIST, fetchTodoList);
  return (
    <ul>
      {data?.map((item, idx) => {
        return <TodoItem {...item} key={idx.toString()} />;
      })}
    </ul>
  );
};

export default TodoList;
