
import React, { useState, useEffect } from 'react';





const TestCircle = ({ width, height, circleRadius }) => {

    const initialMousePosition = { x: width/2, y: height/2};

    // const handleMouseMove = (event) => {
    //     const { clientX, clientY } = event;
    //     setMousePosition({x: clientX, y: clientY})
    // }

    const [onMousePosition, setMousePosition] = useState(initialMousePosition) 

    return <svg width={width} height={height} >
        <circle
            cx={onMousePosition.x}
            cy={onMousePosition.y}
            r={circleRadius}
            fill="green"
        />
    </svg>

}

export default TestCircle