import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { addTodoItem, TODO_LIST } from "src/api";

interface IAddTodoItemProps {}

const AddTodoItem: React.FC<IAddTodoItemProps> = (props) => {
  const [inputVal, setInputVal] = React.useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodoItem, {
    onSuccess: () => {
      setInputVal("");
      queryClient.invalidateQueries(TODO_LIST);
    },
  });
  const onAdd = () => {
    mutation.mutate(inputVal);
  };
  return (
    <div>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        type="text"
      />
      <button onClick={onAdd}>add item</button>
      <hr />
    </div>
  );
};

export default AddTodoItem;
