import React from 'react';
import { Box, Button, List, Set } from 'bumbag';

function Trees(props) {

  return (
    <Box>
      <Set orientation="vertical" isFilled>
        {props.trees.map(tree => {
          return <Button onClick={() => props.setCurrentTree(tree.name)} key={tree._id}>{tree.name}</Button>;
        })}
      </Set>
    </Box>
  );
}

export default Trees;
