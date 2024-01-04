import React, { useState } from "react";
function TempChange(props) {
  const [temp, setTemp] = useState(20);
  return (
    <div className="app-container">
      <div className="temp-display-container">
        <div className="temp">{temp}°C</div>
        <button className="temp-btn" onClick={() => setTemp(temp + 1)}>
          +
        </button>
        <button className="temp-btn" onClick={() => setTemp(temp - 1)}>
          -
        </button>
          </div>
          <button className="reset-btn" onClick={() => setTemp(0)}>Reset</button>
    </div>
  );
}

export default TempChange;
