import React from 'react';
import { HStack, Image, Flex, Link, ChakraProvider } from "@chakra-ui/react";
import logomain from './assets_folder/icons_assets/Logo.svg'
import fontProvider from './fontProvider';

function Header() {
  return (
    <ChakraProvider theme={fontProvider}>
      <Flex
        position="relative"
        top={0}
        left={0}
        right={0}
        translateY={0}
        bg='white'
        w='100%'
        h="10vh"
        paddingLeft='20vw'
        paddingTop='2vh'
      >
        <HStack spacing={7}>
          <Image boxSize='inherit' src={logomain} alt="Main_logo" paddingRight={10}/>
          <Link fontFamily="mainFont" fontWeight="normal" fontSize='2xl'> Home </Link>
          <Link fontFamily="mainFont" fontWeight="normal" fontSize='2xl'> About </Link>
          <Link fontFamily="mainFont" fontWeight="normal" fontSize='2xl'> Menu </Link>
          <Link fontFamily="mainFont" fontWeight="normal" fontSize='2xl'> Reservations </Link>
          <Link fontFamily="mainFont" fontWeight="normal" fontSize='2xl'> Order Online </Link>
          <Link fontFamily="mainFont" fontWeight="normal" fontSize='2xl'> Login </Link>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
}

export default Header;
