// src/components/Container1.js
import React from 'react';
import {Box, Image, Text, Heading, Flex} from '@chakra-ui/react';
import IconNav from "../Components/Header/IconNav";
import StyledTitles from "../Components/StyledTitles";
import Navigation from "../Components/Header/Navigation";

const Index = () => {
  return (
    <Flex
              display="flex"
              flexDirection="row" // Arrange children in a row
              justifyContent="space-between" // Space between the containers
              //justifyContent="flex-start" // Align children to the start (left) with no space between
              alignItems="center" // Center items vertically
              //padding="20px" // Add padding if necessary
              gap="20px" // Control the spacing between the containers
    >
    <Box
        //position="absolute"
        p={8}
        top={4}
        left="29px"
        width="670px"
        //height="665px"
        bgColor="rgba(255, 255, 255, 0.1)"
        bgopacity="0.08" // White fill with 8% opacity
        borderRadius="30px 0 0 30px"
        border="2px solid rgba(255, 255, 255, 0.1)" // 10% white border opacity
        backdropFilter="blur(30.4px)" // Background blur
        zIndex="0"
    >
        <IconNav />
        <Heading
          as="h1"
          fontSize="40px"
          color="white"
          mb="4"
          textTransform="uppercase"
        >
          family website
        </Heading>

        <Box ml="200px"
             mt="80px"
             >
            <Image src="/icons/our.svg" alt="our" />
        </Box>
        <Box
            mt="73px">
        <Heading
          as="h1"
          fontSize="20px"
          color="white"
          mb="2"
        >
           The Kajwang’ Family: A Legacy of Resilience and Unity
        </Heading>
        <Text fontSize="sm" color="white" mt={8}>
            The Kajwang’ family traces its roots back to the early 19th century,
            originating in a small village in Kadiang'a. Joseph Ajwang, the family's patriarch,
            was a Teacher known for his intellect,love and dedication. In 1964,
            seeking better opportunities, Joseph and his wife Mary....
        </Text>
        <Box mt={8}>
            <Image src="/icons/readmore.svg" alt="readmore" />
        </Box>
        </Box>
    </Box>

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
    </Flex>
  );
};


