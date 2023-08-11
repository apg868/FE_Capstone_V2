import { ChakraBaseProvider, Box, Flex, Text} from "@chakra-ui/react"
import Hero from "./Hero"
import Specials from "./Specials"


function Home(){
    return(
        <>
        <Hero/>
        <Specials/>
        </>
    )
}

export default Home