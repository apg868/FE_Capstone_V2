import React from "react";
import { VStack, HStack, Image, Text, Link as ChakraLink, Icon} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import lemonLogo from "./assets_folder/LLlogo1.jpg"
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";



function Footer(){



    return(
        <HStack height="300px" width="100vw" bgColor="rgba(189, 195, 199, 0.3)"  borderColor="rgba(189,195,199)" spacing={40} justifyContent="center">
            <Image src={lemonLogo} boxSize="175px" opacity="60%" borderRadius={10}/>
            <VStack spacing={2}>
            <Text color="gray" fontFamily="fontPrimary" fontWeight="bold" fontSize="md"> Doormat Navigation</Text>
            <Text fontFamily="fontSecondary" fontWeight="medium" fontSize="md" color="gray">
                <Link to="/">Home</Link>
            </Text>
            <Text fontFamily="fontSecondary" fontWeight="medium" fontSize="md" color="gray">
                <Link to="/about">About</Link>
            </Text>
            <Text fontFamily="fontSecondary" fontWeight="medium" fontSize="md" color="gray">
                <Link to="/reservations">Reservations</Link>
            </Text>
            <Text fontFamily="fontSecondary" fontWeight="medium" fontSize="md" color="gray">
                <Link to="/menu">Menu</Link>
            </Text>
            </VStack>
            <VStack>
            <Text color="gray" fontFamily="fontPrimary" fontWeight="bold" fontSize="md"> Get in contact with us!</Text>
            <Text color="gray" fontFamily="fontPrimary" fontWeight="medium" fontSize="xs"> Email: LittleLemonCo@LL.com </Text>
            <Text color="gray" fontFamily="fontPrimary" fontWeight="medium" fontSize="xs"> Phone Number: (808) 123-4567 </Text>
            <Text color="gray" fontFamily="fontPrimary" fontWeight="medium" fontSize="xs"> Address: 102 Maplewood Way  </Text>
            <Text color="gray" fontFamily="fontPrimary" fontWeight="medium" fontSize="xs"> Address: 41 Commonbush Road  </Text>
            <Text color="gray" fontFamily="fontPrimary" fontWeight="medium" fontSize="xs"> Address: 1404 Brickbush Blvd  </Text>
            </VStack>
            <VStack>
            <Text color="gray" fontFamily="fontPrimary" fontWeight="bold" fontSize="md"> Follow us on social media! </Text>
            <HStack spacing={1}>
            <ChakraLink href="https://instagram.com/" color="gray" fontFamily="fontPrimary" fontWeight="bold" fontSize="md"> Instagram </ChakraLink>
            <Icon as={FaInstagram} boxSize="15px"/>
            </HStack>
            <HStack spacing={1}>
            <ChakraLink href="https://facebook.com/" color="gray" fontFamily="fontPrimary" fontWeight="bold" fontSize="md"> Facebook </ChakraLink>
            <Icon as={FaFacebook} boxSize="15px"/>
            </HStack>
            <HStack spacing={1}>
            <ChakraLink href="https://twitter.com/" color="gray" fontFamily="fontPrimary" fontWeight="bold" fontSize="md"> Twitter </ChakraLink>
            <Icon as={FaTwitter} boxSize="15px"/>
            </HStack>
            <HStack spacing={1}>
            <ChakraLink href="https://tiktok.com/" color="gray" fontFamily="fontPrimary" fontWeight="bold" fontSize="md"> TikTok </ChakraLink>
            <Icon as={FaTiktok} boxSize="15px"/>
            </HStack>
            </VStack>


        </HStack>

    )
}

export default Footer;