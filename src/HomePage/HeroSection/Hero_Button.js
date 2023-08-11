import React from 'react';
import {Button, Text} from "@chakra-ui/react";
import {Link } from 'react-router-dom'


function ReserveButton(){

    return(
        <Button borderRadius={12} bg="#F4CE14" marginTop={7} size="lg">
          <Text fontFamily="fontSecondary" fontWeight="medium" fontSize="md">
            <Link to="/reservations">Reserve a Table!</Link>
          </Text>
        </Button>

    )
}

export default ReserveButton
