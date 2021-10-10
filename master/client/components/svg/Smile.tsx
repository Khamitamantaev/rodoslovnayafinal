import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function Smile() {




  const width = 960;
  const height = 500;

  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;

  const eyeOffSetX = 90;
  const eyeOffSetY = 100;
  const eyeRadius = 40;


  return (
    <svg width={width} height={height}>
      <circle
        cx={centerX}
        cy={centerY}
        r="245"
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <circle
        cx={centerX - eyeOffSetX}
        cy={centerY - eyeOffSetY}
        r={eyeRadius}
      />

      <circle
        cx={centerX + eyeOffSetX}
        cy={centerY - eyeOffSetY}
        r={eyeRadius}
      />
    </svg>
  );
}

export default Smile;