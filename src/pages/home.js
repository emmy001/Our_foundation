// src/pages/index1.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ImageBackground from '../components/Background'; // Adjust path as needed
import StyledBox from '../components/StyledBox'; // Adjust path as needed
import Container1 from './/Home/Container1';
import Container2 from './/Home/Container2';
import { Link } from 'react-router-dom';

const Home=()=> {
    return (
        <ChakraProvider>
            <ImageBackground>
                <StyledBox>
                    {/* First Container */}
                    <Container1/>

                    {/* Second Container */}
                    <Container2/>
                </StyledBox>
            </ImageBackground>
        </ChakraProvider>
    );
};
export default Home;
