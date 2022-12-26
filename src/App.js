import React from "react";
import Direction from "./routes/Direction";
import StateContext from "./context/StateContext";

function App() {
  return (
    <div className="App">
      <StateContext>
        <Direction />
      </StateContext>
    </div>
  );
}

export default App;
