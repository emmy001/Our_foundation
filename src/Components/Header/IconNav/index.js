// components/IconNav.js
import React from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';

const IconNav = () => {
  return (
    <Flex
      as="nav"
      bg="transparent"
      p={0}
      direction="column"
      align="center"
    >
      <Flex
        width="100%"
        align="center"
        justify="space-between" // Ensure items are spaced out properly
        mb={5} // Margin bottom to create space between title/icons and "Family Website"
      >
        <Text
          fontSize="24px"
          fontWeight="bold"
          color="white"
          fontFamily="Inter, sans-serif"
          textTransform="uppercase"
          mr={8} // Add margin-right to increase space between title and icons
        >
          The Kajwang
        </Text>
        <Flex>
          <Box mx={2}>
            <Image src="/icons/facebook.png" alt="Icon 1" boxSize="24px" />
          </Box>
          <Box mx={2}>
            <Image src="/icons/linkedin.png" alt="Icon 2" boxSize="24px" />
          </Box>
          <Box mx={2}>
            <Image src="/icons/telegram.png" alt="Icon 3" boxSize="24px" />
          </Box>
          <Box mx={2}>
            <Image src="/icons/x.png" alt="Icon 4" boxSize="24px" />
          </Box>
        </Flex>
      </Flex>
      {/*<Text*/}
      {/*  fontSize="30px"*/}
      {/*  fontWeight="bold"*/}
      {/*  color="white"*/}
      {/*  fontFamily="Inter, sans-serif"*/}
      {/*  textTransform="uppercase"*/}
      {/*>*/}
      {/*  Family Website*/}
      {/*</Text>*/}
    </Flex>
  );
};

export default IconNav;
