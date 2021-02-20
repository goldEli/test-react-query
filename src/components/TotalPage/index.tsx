import React from "react";
import { useQuery } from "react-query";
import { fetchTodoList, TODO_LIST } from "src/api";

interface ITotalPageProps {}

const TotalPage: React.FC<ITotalPageProps> = (props) => {
  const { data } = useQuery(TODO_LIST, fetchTodoList);
  return <div>{`共${data?.length}页`}</div>;
};

export default TotalPage;
