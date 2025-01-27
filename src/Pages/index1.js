// src/pages/index1.js
import React from 'react';
import {Box, Flex, ChakraProvider} from '@chakra-ui/react';
import ImageBackground from '../components/Background'; // Adjust path as needed
import StyledBox from '../components/StyledBox'; // Adjust path as needed
import Container1 from '../Pages/Home/Container1';
import Container2 from '../Pages/Home/Container2';

export default function Home() {
  return (
    <ChakraProvider>
      <Box position="fixed" top={0} left={0} width="100%" height="100%" zIndex={-1}>
            <ImageBackground />
      </Box>
        <StyledBox>
            <Flex
              display="flex"
              flexDirection="row" // Arrange children in a row
              justifyContent="space-between" // Space between the containers
              //justifyContent="flex-start" // Align children to the start (left) with no space between
              alignItems="center" // Center items vertically
              //padding="20px" // Add padding if necessary
              gap="20px" // Control the spacing between the containers
            >
              {/* First Container */}
              <Container1 />

              {/* Second Container */}
              <Container2 />
            </Flex>
        </StyledBox>
    </ChakraProvider>
  );
}
