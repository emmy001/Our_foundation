// src/components/Container1.js
import React from 'react';
import {Box, Image, Text,Heading} from '@chakra-ui/react';
import Overlay from "../../../Components/Overlay";
import IconNav from "../../../Components/Header/IconNav";
import StyledTitles from "../../../Components/StyledTitles";

const Index = () => {
  return (
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
          mb="4px"
          textTransform="uppercase"
        >
          family website
        </Heading>

        <Box ml="200px"
             mt="70px"
             >
            <Image src="/icons/our.svg" alt="our" />
        </Box>
        <Box
            mt="73px">
        <Heading
          as="h1"
          fontSize="20px"
          color="white"
          mb="2px"
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
  );
};

export default Index;
