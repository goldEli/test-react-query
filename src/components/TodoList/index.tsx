import React from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchTodoList, fetchTodoListByPage, TODO_LIST } from "src/api";
import { paginationState } from "src/recoil/todolist";
import { ITodoItem } from "src/type";
import TodoItem from "../TodoItem";

interface ITodoListProps {}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const pagination = useRecoilValue(paginationState);
  const { data } = useQuery(
    [TODO_LIST, pagination.page],
    () => fetchTodoListByPage(pagination.page, pagination.limit),
    { keepPreviousData: true, staleTime: 5000 }
  );
  return (
    <ul>
      {
        // @ts-ignore
        data?.map((item, idx) => {
          return <TodoItem {...item} key={idx.toString()} />;
        })
      }
    </ul>
  );
};

export default TodoList;
