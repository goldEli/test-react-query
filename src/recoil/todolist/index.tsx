import { atom } from "recoil";

interface IPaginationState {
  page: number;
  limit: number;
}

const baseKey = "todolist"

export const paginationState = atom<IPaginationState>({
  key: baseKey + "paginationState",
  default: {
    page: 1,
    limit: 5,
  },
});