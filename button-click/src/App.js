import "./App.css";
import React from "react";

function App() {
  let [count, setCount] = React.useState(0);
  const handleClick = (e) => {
    setCount((count += 1));
    console.log(count);
  };
  return (
    <div className="App">
      <button
        style={{
          padding: "10px 8px",
          backgroundColor: "teal",
          outline: "none",
          border: "none",
          marginTop: "50vh",
          color: "white",
        }}
        onClick={handleClick}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default App;
