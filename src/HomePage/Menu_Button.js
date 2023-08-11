import React from 'react';
import {Button, Text, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function MenuButton(){

    return(
        <Button borderRadius={8} bg="#F4C430" marginTop={7} size="lg">
          <Text fontFamily="primaryFont" fontWeight="bold" fontSize="md">
            <Link to="/menu">Online Menu</Link>
          </Text>
        </Button>

    )
}

export default MenuButton
