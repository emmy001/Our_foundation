// src/pages/index1.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ImageBackground from '../components/Background'; // Adjust path as needed
import StyledBox from '../components/StyledBox'; // Adjust path as needed
import Container1 from '../Pages/Home/Container1';
import Container2 from '../Pages/Home/Container2';

const History=()=> {
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
export default History;
