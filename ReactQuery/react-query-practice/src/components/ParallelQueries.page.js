import { useQuery } from "react-query";
import axios from "axios";

const fetchStudents = () => {
  return axios.get("http://localhost:4000/students");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("students", fetchStudents);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>ParallelQueriesPage</div>;
};
