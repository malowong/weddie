import React from "react";
import useFetch from "../hooks/useFetch";

function FetchDemo() {
  const { data, isLoading, reFetch } = useFetch<{ id: number; name: string }[]>(
    "/data.json",
    []
  );

  const filteredItems = React.useMemo(
    () =>
      data.filter((item) => {
        console.log("test");
        return item.id % 2 !== 0;
      }),
    [data]
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={() => reFetch()}>ReFetch</button>
      {data.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
}

export default FetchDemo;
