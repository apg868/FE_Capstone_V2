import * as React from 'react'
import NavBar from "./Nav"
import Footer from "./Footer"
import './App.css';
import {ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
