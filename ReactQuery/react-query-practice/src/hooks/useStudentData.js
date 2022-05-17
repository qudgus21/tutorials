import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchStudent = () => {
  return axios.get("http://localhost:4000/students");
};

export const useStudentData = (studentId) => {
  const queryClient = useQueryClient();

  return useQuery(
    ["student", studentId],
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
      select: (data) => {
        return data.data.map((student) => student.name);
      },
      initialData: () => {
        //caching
        const student = queryClient
          .getQueryData("student")
          ?.data?.find((student = student.id === parseInt(studentId)));

        if (student) {
          return {
            data: student,
          };
        } else {
          return undefined;
        }
      },
    }
  );
};
