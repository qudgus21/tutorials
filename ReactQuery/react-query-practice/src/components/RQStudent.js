import { useQuery } from "react-query";
import axios from "axios";

const fetchStudent = () => {
  return axios.get("http://localhost:4000/students");
};

export const RQStudent = () => {
  const { isLoading, data, isError, error } = useQuery("student", fetchStudent);
  //data.data 해야하는게 싫다
  //주기적으로 실행되는데, 컨트롤할 수 있는 방법을 찾아봐야 할 듯

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rq-student">
      {data.data.length && (
        <ul>
          {data.data.map((item, index) => (
            <div key={index}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.age}</div>
              <br />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
