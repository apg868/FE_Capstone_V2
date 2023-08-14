import * as React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HStack, Image, Text, Flex, ChakraProvider} from "@chakra-ui/react";
import logomain from "./assets_folder/icons_assets/Logo.svg"
import Home from "./HomePage/Home"
import About from "./AboutPage/About"
import Reservations from "./BookingPage/Reservations.js"
import Menu from './MenuPage/Menu'
import fontProvider from './fontProvider';

function NavBar(){
    return(
    <BrowserRouter>
     <Flex position="sticky" top={0} left={0} right={0} translateY={0} bg='white' w='100%' h="10vh" style={{zIndex:1}}> {/*flexbox for styling of navbar. Routes included below */}
      <HStack spacing={7} paddingLeft="20vw">
        <Image boxSize='inherit' src={logomain} alt="Main_logo" paddingRight={40} />
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize='xl' paddingTop={1}> <Link to="/"> Home </Link> </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize='xl' paddingTop={1}><Link to="/about"> About </Link> </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize='xl' paddingTop={1}><Link to="/reservations"> Reservations </Link> </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize='xl' paddingTop={1}><Link to="/menu"> Menu </Link> </Text>
      </HStack>
    </Flex>
    <Routes> {/*Routes to various homepages */}
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/reservations" element={<Reservations/>}/>
      <Route path="/menu" element={<Menu/>}/>
      {/*
      <Route path="/about" element={<OrderOnline/>}/>
      <Route path="/login" element={<Login/>}/> */}
    </Routes>
    </BrowserRouter>
    )
}

export default NavBar