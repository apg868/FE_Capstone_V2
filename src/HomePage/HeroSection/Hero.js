import React from 'react';
import { HStack, VStack, Image, Box, Text, Flex} from "@chakra-ui/react";
import ReserveButton from './Hero_Button';
import foodPic from '../../assets_folder/icons_assets/restauranfood.jpg'


function Hero(){



    return(
        <Box className="container_box"
            position="relative"
            top={0}
            left={0}
            right={0}
            bg='#495E57'
            w='100%'
            h="40vh"
            paddingRight="10vw"
        >
            <HStack spacing={300} justifyContent="center" paddingTop={4}>
                <Flex bg="#495E57" boxSize="35vh">
                    <VStack spacing={0} align="start">
                        <Text fontFamily="primaryFont" fontWeight="normal" fontSize='4xl' color="#F4CE14" opacity="70%"> Little Lemon </Text>
                        <Text fontFamily="primaryFont" fontWeight="normal" fontSize='3xl' color="white" marginTop={-4} opacity="85%"> Chicago</Text>
                        <Text marginTop={4} marginBottom={-4} lineHeight="1.3" fontFamily="secondaryFont" fontWeight="normal" fontSize='1xl' color="white"> We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist. </Text>
                        <ReserveButton/>
                    </VStack>
                </Flex>
                <Box boxSize="25vh">
                <Image position="absolute" src={foodPic} boxSize="45vh" borderRadius={8} alt="picture of sushi from restaurant">
                </Image>
                </Box>



            </HStack>


        </Box>


    )
}

export default Hero;