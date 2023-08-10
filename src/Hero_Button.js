import React from 'react';
import {Button, Text, ChakraProvider } from "@chakra-ui/react";

import fontProvider from './fontProvider';

function ReserveButton(){

    return(
        <ChakraProvider theme={fontProvider}>
        <Button borderRadius={10} bg="#F4CE14" marginTop={7} size="md">
             <Text fontFamily="fontPrimary" fontWeight="medium" fontSize="md">
            Reserve a Table!
            </Text>
        </Button>
        </ChakraProvider>
    )
}

export default ReserveButton