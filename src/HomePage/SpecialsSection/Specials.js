import React from 'react';
import { HStack, VStack, Image, Box, Text, Flex} from "@chakra-ui/react";
import MenuButton from './Menu_Button';
import SpecialsFrame from './SpecialsFrame';
import Special1 from "../../assets_folder/icons_assets/greek salad.jpg"
import Special2 from "../../assets_folder/icons_assets/bruchetta.svg"
import Special3 from "../../assets_folder/icons_assets/lemon dessert.jpg"
import Order_Specials_Button from './Order_Specials_Button';

function Specials(){
    return(
        <VStack spacing={0}>
            <HStack width="100vw" height="20vh" marginTop="10vh" bg="white" justifyContent="center" spacing={200} >
                <Text fontFamily="primaryFont" fontSize="5xl" fontWeight="medium"> This week's specials! </Text>
                <MenuButton/>
            </HStack>
            <HStack width="100vw" height="70vh" bg="white" justifyContent="center" spacing={10} marginTop={-10}>
                <SpecialsFrame button={<Order_Specials_Button/>} image={Special1} name="Greek Salad" price="$12.99" description= "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic croutons."/>
                <SpecialsFrame button={<Order_Specials_Button/>} image={Special2} name="Bruschetta" price="$5.99" description= "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
                <SpecialsFrame button={<Order_Specials_Button/>} image={Special3} name="Lemon Tart" price="$5.00" description= "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined. "/>
            </HStack>
        </VStack>
    )
}

export default Specials