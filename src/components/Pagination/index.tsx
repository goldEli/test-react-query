import React from "react";
import { useRecoilState } from "recoil";
import { paginationState } from "src/recoil/todolist";

interface IPaginationProps {}

const Pagination: React.FC<IPaginationProps> = (props) => {
  const [pagination, setPagination] = useRecoilState(paginationState);
  const onNext = () => {
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
      <button onClick={onNext}>next</button>
      <input style={{ width: 20 }} type="text" value={pagination.page} />
    </div>
  );
};

export default Pagination;
