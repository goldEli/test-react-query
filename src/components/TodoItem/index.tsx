import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { delTodoItem } from "src/api";
import { ITodoItem } from "src/type";

interface ITodoItemProps {
  content: string;
  key: string;
  id: string;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(delTodoItem, {
    onMutate: (id: string) => {
      return {id};
    },
    onSuccess: (data, error, context) => {
      console.log(context)
      queryClient.setQueryData<ITodoItem[] | undefined>("todolist", old => {
        return old?.filter(item => item.id !== context?.id)
      })
      // queryClient.invalidateQueries("todolist")
    }
  });
  const doDelete = () => {
    mutation.mutate(props.id);
  };
  return (
    <li key={props.key}>
      {props.content}
      <button onClick={doDelete}>delete</button>
    </li>
  );
};

export default TodoItem;
