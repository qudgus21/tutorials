import { useQuery } from "react-query";
import axios from "axios";

const fetchStudent = () => {
  return axios.get("http://localhost:4000/students");
};

export const useStudentData = (onSuccess, onError) => {
  return useQuery(
    "student",
    fetchStudent,
    //basic use
    // {
    //   cacheTime: 50000, //default
    //   staleTime: 0, //default
    //   refetchOnMount: true, //default
    //   refetchOnWindowFocus: false, //default=true
    //   refetchInterval: 10000, //polling
    //   refetchIntervalInBackground: true, //focus 되어있지 않아도 refetch
    // }
    // 자동 패칭 안함
    // {
    //   enabled: false,
    // }
    // callback
    // {
    //   onSuccess,
    //   onError,
    // }
    //serializer
    {
      onSuccess,
      onError,
      select: (data) => {
        return data.data.map((student) => student.name);
      },
    }
  );
};
