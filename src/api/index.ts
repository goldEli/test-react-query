import _ from "lodash";
import { ITodoItem } from "src/type";
import { http } from "src/utils/http";

export const TODO_LIST = "todolist";

export const fetchTodoList = () => {
  return http(`${TODO_LIST}`);
};

export const fetchTodoListByPage = (page: number, limit: number) => {
  return http(`${TODO_LIST}?_page=${page}&_limit=${limit}`);
};

export const addTodoItem = (content: string) => {
  return http(TODO_LIST, {
    method: "POST",
    data: {
      content,
      completed: false,
    },
  });
};

export const delTodoItem = (id: string) => {
  return http(`${TODO_LIST}/${id}`, {
    method: "DELETE",
  });
};

export const updateTodoItem = (
  data: Partial<Omit<ITodoItem, "id">> & Pick<ITodoItem, "id">
) => {
  return http(`${TODO_LIST}/${data.id}`, {
    method: "PATCH",
    data: _.omit(data, "id"),
  });
};
