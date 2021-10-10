import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';
import { arc } from 'd3';


function Smile() {

  const width = 960;
  const height = 500;

  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;

  const eyeOffSetX = 90;
  const eyeOffSetY = 100;
  const eyeRadius = 40;

  const mouthRadius = 140;
  const mouthWidth = 20;


  const mouthArc = arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(Math.PI / 2).endAngle(Math.PI * 3/2)


  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
      <circle
        r="245"
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <circle
        cx={-eyeOffSetX}
        cy={- eyeOffSetY}
        r={eyeRadius}
      />

      <circle
        cx={ eyeOffSetX}
        cy={ - eyeOffSetY}
        r={eyeRadius}
      />
      <path d={mouthArc()}/>
      </g>
    </svg>
  );
}



export default Smile;