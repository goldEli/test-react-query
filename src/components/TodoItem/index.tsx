import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { delTodoItem, TODO_LIST, updateTodoItem } from "src/api";
import { paginationState } from "src/recoil/todolist";
import { ITodoItem } from "src/type";

interface ITodoItemProps extends ITodoItem {
  key: string;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const queryClient = useQueryClient();
  const pagination = useRecoilValue(paginationState)
  const mutationByDel = useMutation(delTodoItem, {
    onSuccess: (data, variables) => {
      queryClient.setQueryData<ITodoItem[] | undefined>([TODO_LIST, pagination.page], (old) => {
        return old?.filter((item) => item.id !== variables);
      });
    },
  });
  const mutationByUpdate = useMutation(updateTodoItem, {
    onSuccess: (data, variables) => {
      queryClient.setQueryData<ITodoItem[] | undefined>([TODO_LIST, pagination.page], (old) => {
        return old?.map((item) => ({
          ...item,
          completed:
            item.id !== variables.id ? item.completed : !item.completed,
        }));
      });
    },
  });
  const doDelete = () => {
    mutationByDel.mutate(props.id);
  };
  const doUpate = () => {
    mutationByUpdate.mutate({ id: props.id, completed: !props.completed });
  };
  return (
    <li key={props.key}>
      <input onChange={doUpate} type="checkbox" checked={props.completed} />
      {props.content}
      <button onClick={doDelete}>delete</button>
    </li>
  );
};

export default TodoItem;
