import { ChakraBaseProvider, Box, Flex, Text} from "@chakra-ui/react"
import Hero from "./HeroSection/Hero"
import Specials from "./SpecialsSection/Specials"


function Home(){
    return(
        <>
        <Hero/>
        <Specials/>
        </>
    )
}

export default Home