import React from 'react';
import { HStack, VStack, Image, Box, Text, Flex, ChakraProvider } from "@chakra-ui/react";
import fontProvider from './fontProvider';
import ReserveButton from './Hero_Button';


function Hero(){



    return(
        <ChakraProvider theme={fontProvider}>
        <Box className="container_box"
            position="relative"
            top={0}
            left={0}
            right={0}
            bg='#495E57'
            w='100%'
            h="38vh"
            paddingRight="10vw"
        >
            <HStack spacing={300} justifyContent="center" paddingTop={4}>
                <Flex bg="#495E57" boxSize="32vh" border="1px" borderColor="orange" position="relative">
                    <VStack spacing={0} align="start">
                        <Text fontFamily="mainFont" fontWeight="normal" fontSize='5xl' color="#F4CE14" opacity="70%"> Little Lemon </Text>
                        <Text fontFamily="mainFont" fontWeight="normal" fontSize='3xl' color="white" marginTop={-6} opacity="85%"> Chicago</Text>
                        <Text marginTop={5} lineHeight="0.9" fontFamily="secondaryFont" fontWeight="normal" fontSize='1xl' color="white"> We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist. </Text>
                        <ReserveButton/>
                    </VStack>
                </Flex>

                <Box bg="orange" boxSize="32vh">
                </Box>



            </HStack>


        </Box>



        </ChakraProvider>

    )
}

export default Hero;