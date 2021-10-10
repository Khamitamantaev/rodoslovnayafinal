
import React, { useState, useEffect } from 'react';





const TestCircle = ({ circleRadius, positionX, positionY }) => {


    const [initPosition, setInitPosition] = useState({ x: 0, y: 0 })


    useEffect(() => {
        setInitPosition({ x: positionX, y: positionY })
    }, [positionX, positionY])

    return (
    <circle
        cx={initPosition.x}
        cy={initPosition.y}
        r={circleRadius}
        fill="green"
    ></circle>)
}

export default TestCircle