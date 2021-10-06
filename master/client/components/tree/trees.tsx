import React from 'react';
import { List } from 'bumbag';

function Trees({trees}) {

  return (
    <List>
      {trees.map(tree => {
        return <List.Item key={tree._id}>{tree.name}</List.Item>;
      })}
    </List>
  );
}

export default Trees;
