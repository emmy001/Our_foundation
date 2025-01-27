import React from 'react';
import { Box } from '@chakra-ui/react';

const Overlay = ({ children }) => {
  return (
    <Box
      position="absolute"
      p={8}
      top={4}
      left={7}
      width="630px"
      height="665px"
      bgColor="rgba(255, 255, 255, 0.1)"
      bgopacity="0.08" // White fill with 8% opacity
      borderRadius="30px 0 0 30px"
      border="2px solid rgba(255, 255, 255, 0.1)" // 10% white border opacity
      backdropFilter="blur(30.4px)" // Background blur
      zIndex="0" // Ensure the overlay is below other content
    >
      {children}
    </Box>
  );
};

export default Overlay;
