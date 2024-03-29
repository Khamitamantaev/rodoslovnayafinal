import React from 'react';
import { styled, Box } from 'bumbag';

const PageContainer = ({ children }) => {
  return (
    <Box maxWidth="42.5rem" >
      {children}
    </Box>
  );
};

export default PageContainer;
