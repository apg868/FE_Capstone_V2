import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import logo from './logo.svg';
import Header from "./Header"
import Main from "./Main"
import Nav from "./Nav"
import Footer from "./Footer"
import './App.css';

function App() {
  return (
    <ChakraProvider>
    <Header/>
    {/* <Nav/>
    <Main/>
    <Footer/> */}
    </ChakraProvider>
  );
}

export default App;
