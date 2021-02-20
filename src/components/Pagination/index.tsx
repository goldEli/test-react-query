import React from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { fetchTodoList, TODO_LIST } from "src/api";
import { paginationState } from "src/recoil/todolist";

interface IPaginationProps {}

const Pagination: React.FC<IPaginationProps> = (props) => {
  const [pagination, setPagination] = useRecoilState(paginationState);
  const { data } = useQuery(TODO_LIST, fetchTodoList);
  const len = data?.length || 0;
  const onNext = () => {
    if (pagination.page >= parseInt((len / pagination.limit).toString()))
      return;
    setPagination((old) => {
      return {
        ...old,
        page: old.page + 1,
      };
    });
  };
  const onPrev = () => {
    if (pagination.page <= 1) return;
    setPagination((old) => {
      return {
        ...old,
        page: old.page - 1,
      };
    });
  };
  return (
    <div>
      <button onClick={onPrev} disabled={pagination.page === 1}>
        prev
      </button>
      <button
        onClick={onNext}
        disabled={
          pagination.page === parseInt((len / pagination.limit).toString())
        }
      >
        next
      </button>
      <input style={{ width: 20 }} type="text" value={pagination.page} />
    </div>
  );
};

export default Pagination;
