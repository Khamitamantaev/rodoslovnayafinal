import React from 'react'
import styled from 'styled-components'
import Rodos from './Rodos'

const Svg = styled(Rodos)` 
  width: 10px; 
  height: 10px;
`

export const Cloud = ({ className }) => ( 
  <Svg viewBox="0 0 24 24" className={className}>   
    <circle fill="red" ></circle>
  </Svg>
)