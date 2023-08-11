import { ChakraBaseProvider, Box, Flex, Text} from "@chakra-ui/react"
import Hero from "./HeroSection/Hero"
import Specials from "./SpecialsSection/Specials"
import Footer from "../Footer"


function Home(){
    return(
        <>
        <Hero/>
        <Specials/>
        <Footer/>
        </>
    )
}

export default Home