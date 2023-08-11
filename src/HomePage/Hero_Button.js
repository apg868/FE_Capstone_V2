import React from 'react';
import {Button, Text, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import fontProvider from '../fontProvider';

function ReserveButton(){

    return(
        <ChakraProvider theme={fontProvider}>
        <Button borderRadius={10} bg="#F4CE14" marginTop={7} size="md">
          <Text fontFamily="fontPrimary" fontWeight="bold" fontSize="md">
            <Link to="/reservations">Reserve a Table!</Link>
          </Text>
        </Button>
        </ChakraProvider>

    )
}

export default ReserveButton
