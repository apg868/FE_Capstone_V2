import React from "react";
import { HStack, VStack, Text, Image, Flex, Box, } from "@chakra-ui/react";
import imageOne from "../../assets_folder/icons_assets/cuttingboard.jpg"
import imageTwo from "../../assets_folder/icons_assets/restone.jpg"
import lemonIcon from "../../assets_folder/LLlogo1.jpg"

function Bio(){
    return(
        <VStack spacing={0}>
            <Text fontFamily="primaryFont" fontWeight="normal" fontSize='5xl' color="#36454F" paddingTop={50}> What can you expect from a visit to Little Lemon? </Text>
            <HStack width="100vw" height="700px" spacing={35} justifyContent="center" >
                <VStack spacing={5} paddingTop={0} width="550px" align="start">
                    <VStack spacing={0} align="start">
                        <Text fontFamily="primaryFont" fontWeight="normal" fontSize='5xl' color="#36454F" > Little Lemon </Text>
                        <Text fontFamily="primaryFont" fontWeight="normal" fontSize='4xl' color="#36454F" marginTop={-4}> Chicago</Text>
                    </VStack>
                    <Text fontFamily="secondaryFont" fontWeight="normal" fontSize='xl' color="#36454F" > Nestled in the heart of the city, Little Lemon offers an ambiance that mirrors the Mediterranean's charm – a fusion of relaxed elegance and vibrant energy. Our commitment to sustainability and farm-to-table practices ensures that every ingredient is a testament to our respect for nature and community. Join us at Little Lemon and let your senses embark on a voyage through a tapestry of tastes, where tradition dances harmoniously with the contemporary, leaving an indelible memory on your palate.
                    Indulge in our curated wine selection, thoughtfully chosen to complement the diverse flavors of our dishes. Whether it's a romantic dinner, a gathering of friends, or a special celebration, Little Lemon invites you to savor each moment in an environment that embodies the spirit of the Mediterranean, creating memories that linger long after the last bite. </Text>
                </VStack>
                <HStack spacing={0}>
                    <Image src={imageOne} boxSize="400px" position="absolute" borderRadius={10} border="1px" borderColor="black" />
                    <Image src={imageTwo} boxSize="400px" marginLeft="140" marginTop="140" position="relative" border="1px" borderColor="black" borderRadius={10} />
                </HStack>
            </HStack>

        </VStack>


    )
}

export default Bio