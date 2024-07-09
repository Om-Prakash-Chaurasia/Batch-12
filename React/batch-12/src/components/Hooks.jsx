import React, { useEffect, useState } from "react";

// useState Hook :-

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//     console.log(count);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//     console.log(count);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

// useEffect Hook :-

// Ex 1 :-

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setTimeout(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [5]);

//   return (
//     <div>
//       <h2>Seconds: {seconds}</h2>
//     </div>
//   );
// }

// export default Timer;

// Ex 2 :-

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         setData(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// }

// const DataFetcher = () => {
//   const { data, loading, error } = useFetch("https://dummyjson.com/posts/");

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return <div>{data ? JSON.stringify(data) : "No data available"}</div>;
// };

// export default DataFetcher;

// useEffect another example :-

function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Welcome");

  useEffect(() => {
    console.log("component mounted");
  });

  function updateCount() {
    setCount(count + 1);
  }

  function updateData() {
    setData("Goodbye");
  }

  return (
    <div>
      <h1>Button clicked {count} times.</h1>
      <h2>Data {data}</h2>
      <button onClick={updateCount}>Click</button>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default Counter;
