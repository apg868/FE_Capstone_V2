import React from 'react';
import { HStack, VStack, Image, Box, Text, Flex} from "@chakra-ui/react";
import MenuButton from './Menu_Button';
import SpecialsFrame from './SpecialsFrame';
import Special1 from "../../assets_folder/icons_assets/greek salad.jpg"
import Order_Specials_Button from './Order_Specials_Button';

function Specials(){
    return(
        <VStack spacing={0}>
            <HStack width="100vw" height="20vh" marginTop="10vh" bg="white" justifyContent="center" spacing={200} >
                <Text fontFamily="secondaryFont" fontSize="4xl" fontWeight="medium"> This week's specials! </Text>
                <MenuButton/>
            </HStack>
            <HStack width="100vw" height="70vh" bg="white" justifyContent="center" spacing={10}>
                <SpecialsFrame button={<Order_Specials_Button/>} image={Special1} name="Greek Salad" price="$4.40" description= "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"/>
                <SpecialsFrame button={<Order_Specials_Button/>} image={Special1} name="Greek Salad" price="$4.40" description= "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"/>
                <SpecialsFrame button={<Order_Specials_Button/>} image={Special1} name="Greek Salad" price="$4.40" description= "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"/>
            </HStack>
        </VStack>
    )
}

export default Specials