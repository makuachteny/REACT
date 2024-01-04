import React, { useState } from "react";
function TempChange(props) {
        const [temp, setTemp]=useState( 10 );
    const [tempColor, setTempColor]=useState( "cold" );
    
    const increaseTemp=() => {
        const newTemp=temp+1;
        if (newTemp >= 15) {
            setTempColor("hot")
        }
        setTemp(newTemp)
    }

    const decreaseTemp=() => {
        const newTemp=temp-1;
        if (newTemp <= 14) {
            setTempColor("cold")
        }
        setTemp(newTemp)
    }
        
    return (
        <div className="app-container">
            <div className="temp-display-container">
                <div className={`temp ${tempColor}`}>{temp}°C</div>
                <button className="temp-btn" onClick={() => increaseTemp()}>
                    +
                </button>
                <button className="temp-btn" onClick={() => decreaseTemp()}>
                    -
                </button>
            </div>
            <button className="reset-btn" onClick={() => setTemp(10)}>Reset</button>
        </div>
    );
}

export default TempChange;
