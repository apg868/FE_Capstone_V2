import React from 'react';
import {Button, Text} from "@chakra-ui/react";
import {Link } from 'react-router-dom'


function MenuButton(){

    return(
        <Button borderRadius={8} bg="#F4C430" size="lg">
          <Text fontFamily="secondaryFont" fontWeight="medium" fontSize="md">
            <Link to="/menu">Online Menu</Link>
          </Text>
        </Button>

    )
}

export default MenuButton
