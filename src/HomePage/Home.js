import { ChakraBaseProvider, Box, Flex, Text} from "@chakra-ui/react"
import Hero from "./HeroSection/Hero"
import Specials from "./SpecialsSection/Specials"
import Footer from "../Footer"
import Testimonials from "./TestimonialsSection/Testimonials"


function Home(){
    return(
        <>
        <Hero/>
        <Specials/>
        <Testimonials/>
        <Footer/>
        </>
    )
}

export default Home