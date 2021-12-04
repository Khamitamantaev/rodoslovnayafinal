import React from 'react';
import { Box, Button, List, Set } from 'bumbag';

function Trees(props) {
  const isTrees = props.trees;

  return (
    <Box>
      <Set orientation="vertical" isFilled>
        {props.trees &&
          props.trees.map(tree => {
            return <Button onClick={() => props.setCurrentTree(tree._id)} key={tree._id}>{tree.name}</Button>;
          })
        }
      </Set>
    </Box>
  );
}

export default Trees;
