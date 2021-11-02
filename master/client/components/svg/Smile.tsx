import React from 'react';
import BackgroundCircle from './circlecomponents/BackgroundCircle';
import Eyes from './circlecomponents/eyes';
import Mouth from './circlecomponents/Mouth';
import FaceContainer from './containers/FaceContainer';

function Smile({ 
  width, 
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffSetX,
  eyeOffSetY, 
  eyeRadius,
  mouthWidth,
  mouthRadius
}) {

  return (
    <FaceContainer width={width} centerX={centerX} centerY={centerY} height={height}>
      <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
      <Eyes eyeOffSetX={eyeOffSetX} eyeOffSetY={eyeOffSetY} eyeRadius={eyeRadius} />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
}



export default Smile;