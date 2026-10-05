import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: "green",
        padding:"10px",
        margin:"0px"
      }}
    >
      <div className="parent">
        <h1>Parent Components</h1>
        
        <div
          style={{
            backgroundColor: "red",
            margin: "5px",
          }}
        >
          Child Components 1
          <br />
          <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>
        </div>
        
        <div
          style={{
            backgroundColor: "yellow",
            margin: "5px",
          }}
        >
          Child Components 2<br></br>
          <button onClick={() => setSelectedOption("Option 2")} >Option 2</button>
        </div>
      </div>
      <p>Select Option : {selectedOption}</p>
    </div>
  );
};

export default App;
