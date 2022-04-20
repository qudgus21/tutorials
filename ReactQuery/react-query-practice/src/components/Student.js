import { useState, useEffect } from "react";
import axios from "axios";

export const Student = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/students")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>에러!</div>;
  }

  return (
    <div className="student">
      {data.length && (
        <ul>
          {data.map((item, index) => (
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
