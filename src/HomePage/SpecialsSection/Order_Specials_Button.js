import React from 'react';
import {Button, Text} from "@chakra-ui/react";
import {Link } from 'react-router-dom'
import { FaHamburger, FaSuitcase } from 'react-icons/fa';


function Order_Specials_Button(){

    return(
        <Button borderRadius={8} bg="#F4C430" size="sm" rightIcon={<FaHamburger/>}>
          <Text fontFamily="secondaryFont" fontWeight="normal" fontSize="sm">
            <Link to="/menu">Order now</Link>
          </Text>
        </Button>

    )
}

export default Order_Specials_Button
