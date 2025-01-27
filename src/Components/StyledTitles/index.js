import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

// StyledTitles Component
const StyledTitles = ({ children }) => {
  return (
    <Heading
      as="h1"
      fontSize="120px"
      color="white"
      mb="4" // Margin bottom for spacing
      mt="238px"
    >
      {children}
    </Heading>
  );
};

export default StyledTitles;
