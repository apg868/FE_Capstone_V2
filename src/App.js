import * as React from 'react'
import NavBar from "./Nav"
import Footer from "./Footer"
import './App.css';
import {ChakraProvider } from "@chakra-ui/react";
import fontProvider from './fontProvider';


function App() {
  return (
    <ChakraProvider theme={fontProvider}>
      <NavBar/>
    </ChakraProvider>
  );
}

export default App;
