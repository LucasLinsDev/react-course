import React, { useEffect, useState } from "react";

const UseMemoExample = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments/"
      );

      const data = await response.json();
      if (data && data.length);
      setData(data);
    }

    getData();
  }, []);

  const findLargestIdFromData = (data) => {
    console.log("this function is re rendered");
    return Math.max(...data.map((item) => item.id));
  };

  const handleToggle = () => {
    setFlag(!flag);
  };

  return (
    <div>
      <h1>{findLargestIdFromData(data)}</h1>
      <button onClick={handleToggle}>Toggle</button>
      {flag && "hello word"}
    </div>
  );
};

export default UseMemoExample;
