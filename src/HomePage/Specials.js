import React from 'react';
import { HStack, VStack, Image, Box, Text, Flex, ChakraProvider } from "@chakra-ui/react";
import fontProvider from '../fontProvider';
import MenuButton from './Menu_Button';

function Specials(){
    return(
        <ChakraProvider theme={fontProvider}>
        <VStack spacing={40}>
        <HStack width="100vw" height="20vh" marginTop="15vh" bg="white" justifyContent="center">
            <Text fontFamily="fontPrimary" fontSize="5xl" fontWeight="medium"> This week's specials! </Text>
            <MenuButton/>
        </HStack>

        <Box boxSize="30vh" bg="orange">

        </Box>
        </VStack>
        </ChakraProvider>
    )
}

export default Specials