// components/Header.js
import React from 'react';
import IconNav from './IconNav';
import NavigationBar from './Navigation'; // Adjust path as needed
import { Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
      <Flex
        as="header"
        bg="transparent"
        p={0}
        align="center"
        justify="space-between"
        wrap="wrap"
      >
        <IconNav />
        <Flex align="center">
          <NavigationBar />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
