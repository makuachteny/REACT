import React, { useState } from "react";
function TempChange(props) {
    const [tempValue, setTempValue] = useState(10);
    const [tempColor, setTempColor]=useState( "cold" );
    
    const increaseTemp=() => {
        const newTemp=tempValue+1;
        
        if ( newTemp > 14 ) {
            setTempColor("hot");
        }
    setTempValue(newTemp);
    }

    const decreaseTemp=() => {
        const newTemp=tempValue-1;
        setTempValue( newTemp );

        if ( newTemp <= 14 ) {
            setTempColor("cold");
        }
     setTempValue(newTemp);
    }

    return (
        <div className="app-container">
            <div className="temp-display-container">
                <div className={`temp-value ${tempColor}`}>{tempValue}°c</div>
            </div>
            <div className="temp-btn-container">
                <div>
                    <button
                        className="temp-btn"
                        onClick={() => increaseTemp()}
                    >
                        +
                    </button>
                    <button
                        className="temp-btn"
                        onClick={() => decreaseTemp()}
                    >
                        -
                    </button>
                </div>
            </div>
            <button className="reset-btn">Reset</button>
        </div>
    );
}

export default TempChange;
