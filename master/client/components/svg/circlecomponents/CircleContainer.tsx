
import React, { useState, useEffect } from 'react';





const CircleContainer = (props) => {

    return <svg width={props.width} height={props.height} >
        {props.children}
            </svg>

}

export default CircleContainer