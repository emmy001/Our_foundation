// components/StyledBox.js
import React from 'react';
import { Box } from '@chakra-ui/react';

const StyledBox = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      flexDirection="row" // Arrange children in a row
      justifyContent="space-between" // Space between the containers
      //justifyContent="flex-start" // Align children to the start (left) with no space between
      alignItems="center" // Center items vertically
      //padding="20px" // Add padding if necessary
      gap="20px" // Control the spacing between the containers
      border="3px solid white"  // Border stroke
      borderRadius="30px"       // Border radius
      width="fit-content"            // Set width
      //height="670px"           // Set height
      mt="20px"
      mb="20px"
      mx="auto"
      p={0}                     // Padding inside the box
      bg="rgba(0, 0, 0, 0.1)"   // Optional: semi-transparent background for better text visibility
      {...props}                // Allow passing additional props
    >
      {children}
    </Box>
  );
};

export default StyledBox;
