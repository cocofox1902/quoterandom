import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const data = await response.json();
      setData(data[0]);
      console.log(data);
    }
    fetchData();
  }, []);

  function handleRefresh() {
    window.location.reload();
  }
  return (
    <div className="App">
      {data && (
        <div className="center">
          <div className="quote">
            <h1>{data?.content}</h1>
            <h2>{data?.author}</h2>
          </div>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      )}
    </div>
  );
}

export default App;
