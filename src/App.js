import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Header"
import Main from "./Main"
import Hero from "./Hero"
import Footer from "./Footer"
import './App.css';

function App() {
  return (
    <ChakraProvider>
    <Header/>
    <Hero/>
    {/*<Main/>
    <Footer/> */}
    </ChakraProvider>
  );
}

export default App;
