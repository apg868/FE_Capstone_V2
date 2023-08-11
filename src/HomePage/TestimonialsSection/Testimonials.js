import React from "react";
import { VStack, HStack, Image, Text, Box } from "@chakra-ui/react";

function Testimonials(){
    return(

    <VStack
    position="relative"
    top={0}
    left={0}
    right={0}
    bg='gray'
    w='100%'
    h="80vh"
    paddingTop={100}
    spacing={100}
    >
    <Text fontFamily="primaryFont" fontSize="5xl" fontWeight="normal" color="black"> Testimonials ! </Text>
    <HStack>
        <Text> filler</Text>
    </HStack>

    </VStack>

    )
}

export default Testimonials