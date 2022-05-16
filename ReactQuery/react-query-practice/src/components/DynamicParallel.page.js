import { useQueries } from "react-query";
import axios from "axios";

const fetchStudents = (studentId) => {
  return axios.get(`http://localhost:4000/studens/${studentId}`);
};

export const DynamicParallelPage = ({ studentIds }) => {
  const results = useQueries(
    studentIds.map((id) => {
      return {
        queryKey: ["student", id],
        queryFn: () => fetchStudents(id),
      };
    })
  );
  console.log(results);
  return <div>DynamicParallelPage</div>;
};
