import { http } from "src/utils/http";

export const fetchTodoList = () => {
  return http("todolist");
};

export const addTodoItem = (content: string) => {
  return http("todolist", {
    method: "POST",
    data: {
      content,
    },
  });
};

export const delTodoItem = (id: string) => {
  console.log(id)
  return http(`todolist/${id}`, {
    method: "DELETE",
  });
};
