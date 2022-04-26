import { useStudentData } from "../hooks/useStudentData";

export const RQStudent = () => {
  const onSuccess = (data) => {
    console.log("데이터 패칭 성공, ", "data: ", data);
  };

  const onError = (error) => {
    console.log("데이터 패칭 에러, ", "error: ", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useStudentData(onSuccess, onError);

  console.log("isLoading: ", isLoading, "isFetching", isFetching);

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rq-student">
      <button onClick={refetch}>Fetch Studens</button>
      {data.map((name) => {
        return <div key={name}>{name}</div>;
      })}
    </div>
  );
};
