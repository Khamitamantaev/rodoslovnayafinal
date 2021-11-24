import React from 'react';
import { Spinner, Box } from 'bumbag';

const FullPageLoading = () => {
  return (
    <Box
      backgroundColor="white"
      width="100%"
      height="100%"
      position="absolute"
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Spinner size="large" />
    </Box>
  );
};

export default FullPageLoading;
