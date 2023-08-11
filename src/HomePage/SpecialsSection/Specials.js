import React from 'react';
import { HStack, VStack, Image, Box, Text, Flex} from "@chakra-ui/react";
import MenuButton from './Menu_Button';
import SpecialsFrame from './SpecialsFrame';
import Special1 from "../../assets_folder/icons_assets/greek salad.jpg"

function Specials(){
    return(
        <VStack spacing={10}>
            <HStack width="100vw" height="20vh" marginTop="10vh" bg="white" justifyContent="center" spacing={200}>
                <Text fontFamily="secondaryFont" fontSize="4xl" fontWeight="medium"> This week's specials! </Text>
                <MenuButton/>
            </HStack>
            <HStack width="100vw" height="50vh" bg="white" paddingLeft="30vw" >
                <SpecialsFrame button={<MenuButton/>} image={Special1} name="Greek Salad" price="$4.40" description= "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"/>
            </HStack>
        </VStack>
    )
}

export default Specials