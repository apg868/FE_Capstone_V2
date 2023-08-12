import React from 'react';
import { Box, Image, HStack, VStack, Text } from "@chakra-ui/react";

function SpecialsFrame(props) {
  const name = props.name;
  const image = props.image;
  const price = props.price;
  const description = props.description;
  const button = props.button;

  return (
    <VStack spacing={0}>
        <Image src={image} width="15vw" height="20vh" borderTopRadius={8} />
        <Box bg={`rgba(128, 128, 128, 0.2)`} width="15vw" height="300px" >
            <VStack spacing={12} padding={2}>
                <HStack spacing={14}>
                    <Text fontFamily="primaryFont" fontSize="xl" fontWeight="bold"> {props.name} </Text>
                    <Text fontFamily="primaryFont" color="orange" fontSize="lg" fontWeight="bold"> {props.price} </Text>
                </HStack>
                <Text fontFamily="fontSecondary" fontSize="sm" color="#36454F" marginLeft={2} marginRight={2}> {props.description} </Text>
                {button}
        </VStack>
      </Box>
    </VStack>
  );
}

export default SpecialsFrame;
