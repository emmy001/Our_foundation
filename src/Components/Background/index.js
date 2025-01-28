// components/ImageBackground.js
import React from 'react';
import { Box } from '@chakra-ui/react';

const ImageBackground = ({ children }) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundImage="url('/images/002bg.png')"
      //backgroundColor="black.900" // Replace with your desired color
      //backgroundColor="#000000" // Black in hex
      //backgroundColor="rgb(0, 0, 0)" // Black in RGB
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed" // Makes the background static
      display="flex"
      //alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default ImageBackground;
