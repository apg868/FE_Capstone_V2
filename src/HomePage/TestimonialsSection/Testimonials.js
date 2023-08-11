import React from "react";
import { VStack, HStack, Image, Text, Box } from "@chakra-ui/react";
import TestimonialsFrame from "./TestimonialsFrame";
import testimonial_image_1 from "../../assets_folder/LLlogo1.jpg"


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
    <Text fontFamily="secondaryFont" fontSize="5xl" fontWeight="normal" color="black"> Testimonials ! </Text>
    <HStack>
        <TestimonialsFrame name="lemon" image={testimonial_image_1} rating="5" reviewText="wow what a delicious time"/>
    </HStack>

    </VStack>

    )
}

export default Testimonials