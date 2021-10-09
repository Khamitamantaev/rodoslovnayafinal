import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function Smile() {

const width = 960;
const height = 500;


  return (
      <svg width={width} height={height}>
        <circle
            cx="480"
            cy="250"
            r="245"
            fill="yellow"
            stroke="black"
            stroke-width="10"
        />
      </svg>
  );
}

export default Smile;