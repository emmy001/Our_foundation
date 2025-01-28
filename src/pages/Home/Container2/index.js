// src/components/Container2.js
import React from 'react';
import {Box, Image, Text, Flex} from '@chakra-ui/react';
import Navigation from "../../../Components/Header/Navigation";
import StyledTitles from "../../../Components/StyledTitles";

const Container2 = () => {
  return (
    <Box
        //position="relative"
        left={80}
        width="630px"
    >
      <Navigation />
      <StyledTitles>
          History
      </StyledTitles>
      {/* Add other contents here later */}
      <Text fontSize="xl" color="white" mt={10}>
        This is the homepage of my awesome Next.js application.
      </Text>
      <Box mt={8}>
        <Flex justify="flex-end" align="center">
          <Image src="/icons/previous.svg" alt="previous" mr="4 0px" />
          <Image src="/icons/next.svg" alt="next" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Container2;
