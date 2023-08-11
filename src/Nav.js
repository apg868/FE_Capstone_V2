import * as React from 'react'
import Nav from "./Nav"
import Main from "./Main"
import Hero from "./Hero"
import Footer from "./Footer"
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HStack, Image, Text, Flex, ChakraProvider } from "@chakra-ui/react";
import logomain from "./assets_folder/icons_assets/Logo.svg"
import Home from "./Home"
import About from "./About"
import fontProvider from './fontProvider'

function NavBar(){
    return(
<ChakraProvider theme={fontProvider}>
    <BrowserRouter>
     <Flex position="relative" top={0} left={0} right={0} translateY={0} bg='white' w='100%' h="10vh"> {/*flexbox for styling of navbar. Routes included below */}
      <HStack spacing={7} paddingLeft="20vw">
        <Image boxSize='inherit' src={logomain} alt="Main_logo" paddingRight={40} />
        <Text fontFamily="mainFont" fontWeight="normal" fontSize='2xl' paddingTop={1}> <Link to="/"> Home </Link> </Text>
        <Text fontFamily="mainFont" fontWeight="normal" fontSize='2xl' paddingTop={1}><Link to="/about"> About </Link> </Text>
      </HStack>
    </Flex>
    <Routes> {/*Routes to various homepages */}
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="/menu" element={<Menu/>}/>
      <Route path="/reservations" element={<Reservations/>}/>
      <Route path="/about" element={<OrderOnline/>}/>
      <Route path="/login" element={<Login/>}/> */}
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
    )
}

export default NavBar